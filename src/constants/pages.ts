import Login from "../page/Login";
import Tip from "../page/Tip";
import TripEvent from "../page/TripEvent";
import Home from "../page/Home";

export enum URL_LABELS {
  TIP = "Tip",
  EVENT = "Event",
  HOME = "Creatrip",
}

export enum URLS {
  LOGIN = "/login",
  TRIP_EVENT = "/tripevent",
  TIP = "/tip",
  HOME = "/",
}

export type PageInfo = {
  label?: URL_LABELS;
  path: URLS;
  Element: () => JSX.Element;
  isPrivate: boolean;
};

export const NAV_PAGES: PageInfo[] = [
  {
    label: URL_LABELS.TIP,
    path: URLS.TIP,
    Element: Tip,
    isPrivate: true,
  },
  {
    label: URL_LABELS.EVENT,
    path: URLS.TRIP_EVENT,
    Element: TripEvent,
    isPrivate: true,
  },
];

export const PAGES: PageInfo[] = [
  {
    label: URL_LABELS.HOME,
    path: URLS.HOME,
    Element: Home,
    isPrivate: false,
  },
  {
    path: URLS.LOGIN,
    Element: Login,
    isPrivate: false,
  },
  ...NAV_PAGES,
];
