import React, { ReactNode } from 'react';

import { Th, Thead, Tr } from '@chakra-ui/react';

type TableHeaderProps = {
  columns: string[];
};

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <Thead>
      <Tr>
        {columns.map<ReactNode>((column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Th key={index}>{column}</Th>
        ))}
      </Tr>
    </Thead>
  );
}

export default TableHeader;
