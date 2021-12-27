import { Button, Switch } from "antd";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { TipPage } from "../../../../graphql-types";
import TableList from "../../../../components/common/Table";
import { URLS } from "../../../../constants/urls";
import { dateToVisibleFormat } from "../../../../util/date";
import STRING from "../../../../constants/strings";
import {
  useDeleteTipMutation,
  useTipUpdateMutation,
} from "../../../../apiHooks/tip/useTipMutations";
import { ErrorToast, SuccessToast } from "../../../../toast";

interface TipListTableProps {
  tips?: TipPage;
  loading: boolean;
  refetch: () => void;
  onPageChange: (page: number) => void;
}

export default function TipListTable({
  loading,
  tips,
  refetch,
  onPageChange,
}: TipListTableProps): JSX.Element {
  const { updateTip } = useTipUpdateMutation();
  const { requestDelete } = useDeleteTipMutation();

  const handleTipDelete = async (code: number) => {
    try {
      await requestDelete(code);
      SuccessToast(STRING.DELETE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

  const handleTipToggleActive = async (code: number) => {
    try {
      await updateTip({ code, toggleActive: true });
      SuccessToast(STRING.TOGGLE_ACTIVE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

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
            <Fragment key={code}>{dateToVisibleFormat(createdAt)}</Fragment>
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
              onClick={() => handleTipToggleActive(code)}
            />
          ),
        },
        {
          title: STRING.DELETE,
          key: "delete",
          width: 100,
          render: (_, { code }) => (
            <Button key={code} onClick={() => handleTipDelete(code)}>
              {STRING.DELETE}
            </Button>
          ),
        },
      ]}
      rowKey="code"
      dataSource={tips?.edges}
      onPageChange={onPageChange}
    />
  );
}
