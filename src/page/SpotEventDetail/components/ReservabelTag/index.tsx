import { Tag } from "antd";
import STRING from "../../../../constants/strings";

export default function ReservableTag({
  isReservable,
}: {
  isReservable: boolean;
}) {
  const color = isReservable ? "blue" : "red";
  const text = isReservable ? STRING.IS_RESERVABLE : STRING.IS_NOT_RESERVABLE;
  return <Tag color={color}>{text}</Tag>;
}
