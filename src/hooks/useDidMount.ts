import { useEffect } from "react";

export default function useDidMount(cb: () => void) {
  useEffect(cb, []);
}
