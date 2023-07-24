import { UilPower, UilSetting } from '@iconscout/react-unicons';

import useAuth from '@app/hooks/contexts/auth.context-hook';

import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { HeaderProps } from './header.container.types';

function Header({ title }: HeaderProps) {
  const auth = useAuth();

  return (
    <Flex flexDir="row" p="8" justify="space-between" align="center">
      <Heading as="h1" fontWeight="bold" color="black">
        {title}
      </Heading>
      <HStack align="center">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<Icon as={UilSetting} color="gray.400" w="6" h="6" />}
            aria-label="Abrir configurações de Perfil"
            bg="white"
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.6 }}
          />
          <MenuList>
            <MenuItem onClick={auth.logout}>
              <Icon as={UilPower} mr="2" w="4" h="4" color="red.400" />
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}

export default Header;
