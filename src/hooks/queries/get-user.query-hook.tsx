import { useQuery } from 'react-query';

import AuthService from '@app/application/services/auth.service';

import { useToast } from '@chakra-ui/react';

function useGetUser() {
  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  return useQuery('get-user', () => AuthService.getAuth(), {
    onError: () => {
      toast({
        title: 'Erro!',
        description: 'Houve um erro ao tenta buscar os seus dados!',
        status: 'error',
      });
    },
  });
}

export default useGetUser;
