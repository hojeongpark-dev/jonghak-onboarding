import { Nullable } from "../types/null";

export const wonPrice = (price: Nullable<string | number>): string =>
  `₩${Number(price).toLocaleString("ko")}`;
