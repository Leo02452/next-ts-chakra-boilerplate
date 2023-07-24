import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useQueryClient } from 'react-query';

import { useRouter } from 'next/router';

import UnauthorizedException from '@app/application/exceptions/unauthorized.exception';

import ApiClient from '@app/providers/api-client.provider';

import QueryClientConfig from '@app/constants/query-client.constant';

import { useToast } from '@chakra-ui/react';

export type AuthContextProps = {
  token: string;
  role: string;
  isAuthenticated: boolean;
  logout(): void;
  authenticate(token: string, role: string): Promise<void>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const queryClient = useQueryClient();

  const toast = useToast({
    position: 'top-right',
  });

  const [cookies, setCookie, delCookie] = useCookies(['token', 'role']);

  const logout = useCallback(async () => {
    ApiClient.defaults.headers.common.Authorization = '';

    queryClient.setDefaultOptions({ ...QueryClientConfig.defaultOptions });

    delCookie('token', {
      path: '/',
    });

    await router.push('/consultor/login');
  }, [delCookie, queryClient, router]);

  const authenticate = useCallback(
    async (token: string, role: string) => {
      ApiClient.defaults.headers.common.Authorization = `Bearer ${token}`;

      queryClient.setDefaultOptions({
        mutations: {
          onError: (err: any) => {
            if (err instanceof UnauthorizedException) {
              toast({
                title: 'Sessão expirada!',
                description:
                  'Sua sessão expirou, por favor, faça login novamente.',
                status: 'error',
              });
              logout();
            }
          },
        },
        queries: {
          ...QueryClientConfig.defaultOptions?.queries,
          onError: (err: any) => {
            if (err instanceof UnauthorizedException) {
              toast({
                title: 'Sessão expirada!',
                description:
                  'Sua sessão expirou, por favor, faça login novamente.',
                status: 'error',
              });
              logout();
            }
          },
        },
      });

      setCookie('token', token, {
        path: '/',
      });

      setCookie('role', role, {
        path: '/',
      });
    },
    [logout, queryClient, setCookie, toast],
  );

  const isAuthenticated = useMemo(() => !!cookies.token, [cookies]);

  useEffect(() => {
    if (isAuthenticated) {
      ApiClient.defaults.headers.common.Authorization = `Bearer ${cookies.token}`;

      ApiClient.interceptors.response.use(
        (response) => response,
        (err) => {
          if (err instanceof UnauthorizedException) {
            logout();
          }
        },
      );
    }
  }, [cookies, isAuthenticated, logout]);

  const value = useMemo(
    () => ({
      token: cookies.token as string,
      role: cookies.role as string,
      isAuthenticated,
      authenticate,
      logout,
    }),
    [cookies, isAuthenticated, authenticate, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
