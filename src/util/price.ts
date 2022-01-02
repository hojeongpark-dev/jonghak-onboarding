import { Nullable } from "../types/null";

// price type이 Nullable이라 undefined가 가능한데 ₩NaN 이 나오는 경우에 대한 처리가 없는 이유?
// number 가 아닌 타입들에 대한 예외처리가 없는 이유?
export const wonPrice = (price: Nullable<string | number>): string =>
  `₩${Number(price).toLocaleString("ko")}`;
