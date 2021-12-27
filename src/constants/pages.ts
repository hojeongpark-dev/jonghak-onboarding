import Login from "../page/Login";
import Tip from "../page/Tip";
import SpotEvent from "../page/SpotEvent";
import Home from "../page/Home";
import { URLS } from "./urls";
import withAuth from "../hoc/withAuth";
import TipDetail from "../page/TipDetail";
import SpotEventDetail from "../page/SpotEventDetail";
import hocProvider from "../hoc/hocProvider";
import { Hoc } from "../types/hoc";

export enum PAGE_LABELS {
  TIP = "Tip",
  TIP_DETAIL = "Tip Detail",
  EVENT = "Event",
  EVENT_DETAIL = "Event Detail",
  HOME = "Creatrip",
}

export type PageInfo = {
  label?: PAGE_LABELS;
  path: URLS;
  hideMenu?: boolean;
  Element: () => JSX.Element;
};

const addHoc = (hocs: Hoc[], pages: PageInfo[]) =>
  pages.map(({ Element, ...info }) => ({
    ...info,
    Element: hocProvider(hocs, Element),
  }));

export const PRIVATE_PAGES: PageInfo[] = addHoc(
  [withAuth],
  [
    {
      label: PAGE_LABELS.EVENT,
      path: URLS.SPOT_EVENT,
      Element: SpotEvent,
    },
    {
      label: PAGE_LABELS.EVENT_DETAIL,
      path: URLS.SPOT_EVENT_DETAIL,
      hideMenu: true,
      Element: SpotEventDetail,
    },
    {
      label: PAGE_LABELS.TIP,
      path: URLS.TIP,
      Element: Tip,
    },
    {
      label: PAGE_LABELS.TIP_DETAIL,
      path: URLS.TIP_DETAIL,
      hideMenu: true,
      Element: TipDetail,
    },
  ]
);

export const PAGES: PageInfo[] = [
  {
    label: PAGE_LABELS.HOME,
    path: URLS.HOME,
    Element: Home,
  },
  {
    path: URLS.LOGIN,
    Element: Login,
  },
  ...PRIVATE_PAGES,
];
