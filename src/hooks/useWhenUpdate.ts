import { useEffect, useState } from "react";
import useDidMount from "./useDidMount";

// update 기준이 무엇을 기준으로 하는지 훅 네임만 보고 알 수 없는데 다른 네이밍은 고려를 안하셨는지?
export default function useWhenUpdate<T>(cb: () => void, deps: T[]) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) cb();
  }, deps);

  useDidMount(() => setMounted(true));
}
