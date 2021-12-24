import { SpotEventStatusType, SpotEventType } from "../graphql-types";

export const EVENT_TYPE_TO_KO: Record<SpotEventType, string> = {
  DISCOUNT: "할인",
  GET_FREE: "N+N",
};

export const EVENT_STATUS_TO_KO: Record<SpotEventStatusType, string> = {
  READY: "대기중",
  ON_GOING: "진행중",
  CLOSED: "종료",
};
