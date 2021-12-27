import { Input } from "antd";
import { ChangeEvent } from "react";
import { SearchProps } from "antd/lib/input/Search";
import STRING from "../../../constants/strings";

interface SearchBarProps extends SearchProps {
  resetWhenEmpty?: boolean;
}

export default function SearchBar({
  resetWhenEmpty = false,
  onChange,
  onSearch,
  ...rest
}: SearchBarProps): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    if (resetWhenEmpty && e.target.value.length === 0) onSearch?.(STRING.EMPTY);
  };

  return <Input.Search {...rest} onChange={handleChange} onSearch={onSearch} />;
}
