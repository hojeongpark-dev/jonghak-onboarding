import { useCallback, useState } from "react";

export default function useToggle(initValue = false): [boolean, () => void, string] {
  const [toggleState, setToggleState] = useState(initValue);
  const [key, setKey] = useState("0");

  const toggle = useCallback(() => {
    if (toggleState === initValue) setKey((prev) => `${+prev + 1}`);
    setToggleState((prev) => !prev);
  }, []);

  return [toggleState, toggle, key];
}
