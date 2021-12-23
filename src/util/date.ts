import { format } from "date-fns";

export const dateFormat = (serverDate:string) => format(new Date(serverDate), "yyyy-MM-dd");
