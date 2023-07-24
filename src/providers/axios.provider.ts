import { AxiosError } from 'axios';

import ApiException from '@app/application/exceptions/api.exception';
import ForbbidenException from '@app/application/exceptions/forbbiden.exception';
import InternalException from '@app/application/exceptions/internal.exception';
import UnauthorizedException from '@app/application/exceptions/unauthorized.exception';

import ApiClient from '@app/providers/api-client.provider';

ApiClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      return Promise.reject(new UnauthorizedException());
    }

    if (error.response?.status === 403) {
      return Promise.reject(new ForbbidenException());
    }

    if (error.response?.status === 500) {
      return Promise.reject(new InternalException());
    }

    const responseData = error.response?.data as Record<string, any>;

    return Promise.reject(
      new ApiException(
        responseData?.code || 'unknowm',
        responseData?.message || 'Ocorreu um erro ao tentar realizar a ação!',
      ),
    );
  },
);
