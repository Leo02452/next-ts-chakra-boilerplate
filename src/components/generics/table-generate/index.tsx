import { Table, TableContainer } from '@chakra-ui/react';

import TableBody from './partials/table-body';
import TableHeader from './partials/table-header';

export type TableGenerateProps = {
  data?: any[];
  columnExtrator(rowElement: any): React.ReactNode[];
  hrefExtractor?(element: any): string;
  columnNames: string[];
  isLoading: boolean;
  messageWhenEmpty: string;
};

function TableGenerate({
  data,
  isLoading,
  columnNames,
  columnExtrator,
  hrefExtractor,
  messageWhenEmpty,
}: TableGenerateProps) {
  return (
    <TableContainer>
      <Table>
        <TableHeader columns={columnNames} />
        <TableBody
          data={data}
          skeletonCounts={columnNames.length}
          isLoading={isLoading}
          messageWhenEmpty={messageWhenEmpty}
          columnExtrator={columnExtrator}
          hrefExtractor={hrefExtractor}
        />
      </Table>
    </TableContainer>
  );
}

export default TableGenerate;
