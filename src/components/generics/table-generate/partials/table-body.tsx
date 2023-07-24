import { Center, Tbody, Text, Tr } from '@chakra-ui/react';

import TableItem from './table-item';
import TableSkeleton from './table-skeleton';

type TableBodyProps = {
  data?: any[];
  isLoading: boolean;
  skeletonCounts: number;
  columnExtrator(rowElement: any): React.ReactNode[];
  hrefExtractor?(element: any): string;
  messageWhenEmpty: string;
};

function TableBody({
  data,
  isLoading,
  skeletonCounts,
  columnExtrator,
  hrefExtractor,
  messageWhenEmpty,
}: TableBodyProps) {
  return (
    <Tbody>
      {!isLoading && data && data.length === 0 && (
        <Tr>
          <Center w="full">
            <Text as="small" textAlign="center">
              {messageWhenEmpty}
            </Text>
          </Center>
        </Tr>
      )}

      {isLoading && <TableSkeleton counts={skeletonCounts} />}

      {!isLoading &&
        data &&
        data.length > 0 &&
        data?.map((rowData, index) => (
          <TableItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            rowData={rowData}
            columnExtrator={columnExtrator}
            hrefExtractor={hrefExtractor}
          />
        ))}
    </Tbody>
  );
}

export default TableBody;
