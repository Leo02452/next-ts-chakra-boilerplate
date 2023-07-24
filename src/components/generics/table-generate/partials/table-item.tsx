import { useMemo } from 'react';

import Link from 'next/link';

import { Td, Tr } from '@chakra-ui/react';

type TableItemProps = {
  rowData: any;
  columnExtrator(rowElement: any): React.ReactNode[];
  hrefExtractor?(element: any): string;
};

function TableItem({ rowData, columnExtrator, hrefExtractor }: TableItemProps) {
  const columns = useMemo(
    () => columnExtrator(rowData),
    [columnExtrator, rowData],
  );

  const href = useMemo(
    () => hrefExtractor?.(rowData),
    [hrefExtractor, rowData],
  );

  if (href) {
    return (
      <Link href={href}>
        <Tr
          transition="background .2s"
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
        >
          {columns.map((column, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Td key={index}>{column}</Td>
          ))}
        </Tr>
      </Link>
    );
  }

  return (
    <Tr>
      {columns.map((column, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Td key={index}>{column}</Td>
      ))}
    </Tr>
  );
}

export default TableItem;
