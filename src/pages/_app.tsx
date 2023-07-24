import '@app/providers/axios.provider';

import { useMemo, useState } from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';

import QueryClientConfig from '@app/constants/query-client.constant';
import Theme from '@app/constants/theme';

import { AuthProvider } from '@app/contexts/auth.context';

import ApiClient from '@app/providers/api-client.provider';

import { ChakraProvider } from '@chakra-ui/react';

export type MyAppProps = AppProps & {
  cookies: string;
};

function MyApp({ Component, pageProps, cookies }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient(QueryClientConfig));

  const isBrowser = useMemo(() => typeof window !== 'undefined', []);

  return (
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ChakraProvider theme={Theme}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const cookiesRaw = appContext.ctx.req?.headers?.cookie;
  const cookies = new Cookies(cookiesRaw);
  const accessToken = cookies.get('access-token');

  if (accessToken) {
    const authHeader = `Bearer ${accessToken}`;
    ApiClient.defaults.headers.common.Authorization = authHeader;
  }
  return { ...appProps, cookies: cookiesRaw };
};

export default MyApp;
