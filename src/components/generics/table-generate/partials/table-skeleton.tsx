import { Tr, Td, Skeleton } from '@chakra-ui/react';

type TableSkeletonProps = {
  counts: number;
};

function TableSkeleton({ counts }: TableSkeletonProps) {
  const elements: React.ReactNode[] = [];
  for (let index = 0; index < counts; index += 1) {
    elements.push(
      <Td key={index}>
        <Skeleton w="full" h="8" />
      </Td>,
    );
  }
  return <Tr>{elements}</Tr>;
}

export default TableSkeleton;
