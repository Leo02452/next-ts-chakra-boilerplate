import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { HStack, Text } from '@chakra-ui/react';

import Link from '@app/components/generics/link';

import { SideBarLinkProps } from './side-bar-link.partial.types';

function SideBarLink({ href, icon, title }: SideBarLinkProps) {
  const router = useRouter();

  const currentPage = useMemo(
    () => router.asPath === href,
    [href, router.asPath],
  );

  return (
    <Link
      display="flex"
      href={href}
      h="12"
      mx="3"
      px="3"
      borderRadius="xl"
      borderColor="primary.500"
      borderStyle="solid"
      _hover={{
        bg: 'gray.100',
      }}
    >
      <HStack spacing="3" color={currentPage ? 'primary.500' : 'black'}>
        {icon}
        <Text fontWeight="medium" color={currentPage ? 'primary.500' : 'black'}>
          {title}
        </Text>
      </HStack>
    </Link>
  );
}

export default SideBarLink;
