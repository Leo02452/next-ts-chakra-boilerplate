import { useMemo } from 'react';

import Image from 'next/image';

import { UilAngleRightB } from '@iconscout/react-unicons';

import useAuth from '@app/hooks/contexts/auth.context-hook';
import useGetUser from '@app/hooks/queries/get-user.query-hook';

import {
  Box,
  Center,
  Flex,
  HStack,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';

import SideBarLink from '@app/components/containers/side-bar/partials/side-bar-link';

import {
  OptionsForAdmin,
  OptionsForUnitManager,
} from './side-bar.container.constants';

function SideBar() {
  const user = useGetUser();

  const { logout, role } = useAuth();

  const options = useMemo(() => {
    if (role === 'admin') {
      return OptionsForAdmin;
    }
    return OptionsForUnitManager;
  }, [role]);

  return (
    <Box p="6" h="100vh">
      <Stack
        w="72"
        h="100%"
        bg="white"
        borderRadius="2xl"
        justifyContent="space-between"
      >
        <Stack>
          <Center as="header" py="6" px="12">
            <Image src="/logo.png" width="256" height="72" />
          </Center>
          <Stack as="nav">
            <List>
              {options.map((link) => (
                <ListItem key={link.href}>
                  <SideBarLink {...link} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>

        <Flex p="3">
          <Stack bg="primary.500" w="full" borderRadius="2xl" p="3" spacing="3">
            <Skeleton isLoaded={user.isSuccess}>
              <Text color="white" fontSize="xl">
                Olá,&nbsp;
                {user.data?.name}
              </Text>
            </Skeleton>
            <Flex w="full" justify="space-between" align="center">
              <HStack
                color="white"
                cursor="pointer"
                px="1.5"
                py="1.5"
                borderRadius="xl"
                _hover={{
                  bg: 'primary.400',
                }}
                onClick={logout}
              >
                <Text>Sair</Text>
                <UilAngleRightB />
              </HStack>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default SideBar;
