import { Button, Popconfirm, Popover, Switch } from "antd";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import {
  SpotEventPage,
  SpotEventStatusType,
  SpotEventType,
} from "../../../../graphql-types";
import TableList from "../../../../components/common/Table";
import STRING from "../../../../constants/strings";
import {
  EVENT_STATUS_TO_KO,
  EVENT_TYPE_TO_KO,
} from "../../../../constants/enumToString";
import { URLS } from "../../../../constants/urls";
import { dateFormat } from "../../../../util/date";
import NotYetSwitch from "../../../../components/spotEvent/NotYetSwitch";
import OngoingSwitch from "../../../../components/spotEvent/OngoingSwitch";

interface EventSpotListTableProps {
  events?: SpotEventPage;
  loading: boolean;
  onEventDelete: (code: number) => void;
}

export default function EventSpotListTable({
  events,
  loading,
  onEventDelete,
}: EventSpotListTableProps): JSX.Element {
  return (
    <TableList
      loading={loading}
      pagination={{
        total: events?.totalCount,
      }}
      columns={[
        {
          title: STRING.CODE,
          dataIndex: "code",
          width: 60,
        },
        {
          title: STRING.TYPE,
          width: 60,
          dataIndex: "type",
          render: (type: SpotEventType) => EVENT_TYPE_TO_KO[type],
        },
        {
          title: STRING.NAME,
          dataIndex: ["spot", "translations", "0", "name"],
          width: 90,
          render: (name, { code }) => (
            <Link
              key={code}
              to={URLS.TRIP_EVENT_DETAIL.replace(":code", `${code}`)}
            >
              {name}
            </Link>
          ),
        },
        {
          title: STRING.PERIOD,
          dataIndex: "start",
          width: 200,
          render: (start, { end, code }) => (
            <Fragment key={code}>{`${dateFormat(start)} ~ ${dateFormat(
              end
            )}`}</Fragment>
          ),
        },
        {
          title: STRING.MANAGER,
          dataIndex: ["manager", "name"],
          width: 120,
        },
        {
          title: STRING.STATUS,
          dataIndex: "status",
          width: 80,
          render: (type: SpotEventStatusType) => EVENT_STATUS_TO_KO[type],
        },
        {
          title: STRING.IS_ONGOING,
          key: "isOngoing",
          width: 100,
          render: (_, { status, code }) =>
            status === "ON_GOING" ? (
              <OngoingSwitch code={code} onEventEnd={() => {}} />
            ) : (
              <NotYetSwitch />
            ),
        },
        {
          title: STRING.DELETE,
          width: 100,
          render: (_, { code }) => (
            <Popconfirm
              title={STRING.DELETE_CONFIRM}
              onConfirm={() => onEventDelete(code)}
              okText={STRING.CONFIRM}
              cancelText={STRING.CANCEL}
            >
              <Button key={code}>{STRING.DELETE}</Button>
            </Popconfirm>
          ),
        },
      ]}
      rowKey="code"
      dataSource={events?.edges}
    />
  );
}
