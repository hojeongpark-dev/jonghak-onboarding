import Login from "../page/Login";
import Tip from "../page/Tip";
import TripEvent from "../page/TripEvent";
import Home from "../page/Home";
import { URL_LABELS, URLS } from "./urls";
import withAuth from "../hoc/withAuth";
import TipDetail from "../page/TipDetail";

export type PageInfo = {
  label?: URL_LABELS;
  path: URLS;
  hideMenu?: boolean;
  Element: () => JSX.Element;
};

export const PRIVATE_PAGES: PageInfo[] = [
  {
    label: URL_LABELS.EVENT,
    path: URLS.TRIP_EVENT,
    Element: withAuth(TripEvent),
  },
  {
    label: URL_LABELS.TIP,
    path: URLS.TIP,
    Element: withAuth(Tip),
  },
  {
    label: URL_LABELS.TIP,
    path: URLS.TIP_DETAIL,
    hideMenu: true,
    Element: withAuth(TipDetail),
  },
];

export const PAGES: PageInfo[] = [
  {
    label: URL_LABELS.HOME,
    path: URLS.HOME,
    Element: Home,
  },
  {
    path: URLS.LOGIN,
    Element: Login,
  },
  ...PRIVATE_PAGES,
];
