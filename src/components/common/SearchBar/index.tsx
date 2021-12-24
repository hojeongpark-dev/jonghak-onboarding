import { Input } from "antd";
import React, { ChangeEvent } from "react";
import { SearchProps } from "antd/lib/input/Search";

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

    if (resetWhenEmpty && onSearch && e.target.value.length === 0) onSearch("");
  };

  return <Input.Search {...rest} onChange={handleChange} onSearch={onSearch} />;
}
