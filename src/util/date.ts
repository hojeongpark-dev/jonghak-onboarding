import { format } from "date-fns";
import moment from "moment-es6";

// severDate가 서버에서 넘어온 데이터를 의미하는 건지?
// front 에서 생성한 date도 사용할 수 있을 것 같은데, serverDate라고 한 이유?
export const dateToVisibleFormat = (serverDate: string) =>
  format(new Date(serverDate), "yyyy-MM-dd");

type StartOrEnd = "start" | "end";
export const dateTimeFormat = (
  momentDate: moment.Moment,
  startOrEnd?: StartOrEnd
) => {
  if (startOrEnd === "start") return momentDate.format("yyyy-MM-DDT00:00");
  if (startOrEnd === "end") return momentDate.format("yyyy-MM-DDT23:59");
  return momentDate.format("yyyy-MM-DDThh:mm");
};
// dateTimeFormat에서 momentDate 라고 매개변수명을 사용했는데 다른 이유?
export const isBeforeDate = (date: moment.Moment) =>
  // @ts-ignore
  date.isBefore(moment().format("yyyyMMDD"));
