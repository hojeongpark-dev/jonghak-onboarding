import { Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { TipPage } from "../../../../graphql-types";
import TableList from "../../../../components/common/Table";
import { URLS } from "../../../../constants/urls";
import { dateFormat } from "../../../../util/date";
import STRING from "../../../../constants/strings";

interface TipListTableProps {
  tips?: TipPage;
  loading: boolean;
  onTipDelete: (code: number) => void;
  onTipToggleActive: (code: number) => void;
}

export default function TipListTable({
  loading,
  tips,
  onTipDelete,
  onTipToggleActive,
}: TipListTableProps): JSX.Element {
  return (
    <TableList
      loading={loading}
      pagination={{
        total: tips?.totalCount,
      }}
      columns={[
        {
          title: STRING.CODE,
          dataIndex: "code",
          width: 80,
        },
        {
          title: STRING.TITLE,
          dataIndex: "title",
          key: "title",
          render: (title, { code }) => (
            <Link key={code} to={URLS.TIP_DETAIL.replace(":code", `${code}`)}>
              {title}
            </Link>
          ),
        },
        {
          title: STRING.CREATED_AT,
          dataIndex: "createdAt",
          key: "createdAt",
          width: 120,
          render: (createdAt, { code }) => (
            <Fragment key={code}>{dateFormat(createdAt)}</Fragment>
          ),
        },
        {
          title: STRING.MANAGER,
          dataIndex: ["manager", "name"],
          key: "manager",
          width: 120,
        },
        {
          title: STRING.IS_ACTIVE,
          dataIndex: "isActive",
          key: "isActive",
          width: 100,
          render: (value, { code }) => (
            <Switch
              key={code}
              defaultChecked={value}
              onClick={() => onTipToggleActive(code)}
            />
          ),
        },
        {
          title: STRING.DELETE,
          key: "delete",
          width: 100,
          render: (_, { code }) => (
            <Button key={code} onClick={() => onTipDelete(code)}>
              {STRING.DELETE}
            </Button>
          ),
        },
      ]}
      rowKey="code"
      dataSource={tips?.edges}
    />
  );
}
