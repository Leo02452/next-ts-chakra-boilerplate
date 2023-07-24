import { Flex } from '@chakra-ui/react';

import SideBar from '@app/components/containers/side-bar';

export type DashboardTemplateProps = {
  children?: React.ReactNode;
};

function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <Flex flexDir="row" h="100vh" bg="gray.100">
      <SideBar />
      <Flex flexDir="row" w="full" h="100vh" bg="gray.100" overflowY="scroll">
        <Flex p="6" w="full" pb="6" pl="0">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardTemplate;
