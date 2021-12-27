import { format } from "date-fns";
import moment from "moment-es6";

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
export const isBeforeDate = (current: moment.Moment) => !current.isAfter();
