import { useEffect, useState } from "react";
import useDidMount from "./useDidMount";

export default function useWhenUpdate<T>(cb: () => void, deps: T[]) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) cb();
  }, deps);

  useDidMount(() => setMounted(true));
}
