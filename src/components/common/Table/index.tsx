import { Table, TablePaginationConfig } from "antd";
import { TableProps } from "antd/lib/table/Table";
import { DEFAULT_LIMIT_SIZE } from "../../../constants/list";

interface TableListProps<T> extends TableProps<T> {
  onPageChange?: (pageNumber: number) => void;
}

export default function TableList<T extends object>({
  pagination,
  onPageChange,
  onChange,
  ...rest
}: TableListProps<T>): JSX.Element {
  const handlePageChange = (config: TablePaginationConfig) => {
    if (config.current) onPageChange?.(config.current);
  };

  return (
    <Table<T>
      pagination={{
        pageSize: DEFAULT_LIMIT_SIZE,
        ...pagination,
      }}
      onChange={(...args) => {
        const [config] = args;
        onChange?.(...args);
        handlePageChange(config);
      }}
      {...rest}
    />
  );
}
