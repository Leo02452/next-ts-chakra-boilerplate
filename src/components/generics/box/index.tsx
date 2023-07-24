import { Flex, FlexProps } from '@chakra-ui/react';

function Box(props: FlexProps) {
  return (
    <Flex
      bg="white"
      p="6"
      mx={['6', '6', '0']}
      borderRadius="lg"
      shadow="lg"
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export default Box;
