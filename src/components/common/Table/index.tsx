import { Table } from "antd";
import { TableProps } from "antd/lib/table/Table";
import { DEFAULT_LIMIT_SIZE } from "../../../constants/list";
import LoadingSpinner from "../LoadingSpinner";

interface TableListProps<T> extends TableProps<T> {
  loading?: boolean;
}

export default function TableList<T extends object>({
  loading,
  pagination,
  ...rest
}: TableListProps<T>): JSX.Element {
  return loading ? (
    <LoadingSpinner />
  ) : (
    <Table<T>
      pagination={{
        pageSize: DEFAULT_LIMIT_SIZE,
        ...pagination,
      }}
      {...rest}
    />
  );
}
