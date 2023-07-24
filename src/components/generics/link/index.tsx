import NextLink from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type LinkProps = ChakraLinkProps & {
  href: string;
};

function Link(props: LinkProps) {
  return (
    <NextLink href={props.href} passHref>
      <ChakraLink {...props} />
    </NextLink>
  );
}

export default Link;
