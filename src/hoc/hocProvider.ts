import { Hoc, Component } from "../types/hoc";

export default function hocProvider(
  hocArray: Hoc[],
  component: Component
): Component {
  return hocArray.reduce((comp, hoc) => hoc(comp), component);
}
