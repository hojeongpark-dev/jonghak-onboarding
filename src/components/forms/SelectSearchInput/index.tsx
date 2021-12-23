import { Select, Spin } from "antd";
import {
  CustomInputProps,
  SelectSearchFormInfo,
  SelectSearchInputProps,
} from "../../../types/form";
import { removeUnusedProperty } from "../../../util/form";

export default function SelectSearchInput({
  keyAndName,
  options,
  onSearch,
  onOptionClick,
  ...selectSearchProps
}: SelectSearchInputProps &
  SelectSearchFormInfo &
  CustomInputProps): JSX.Element {
  return (
    <Select
      key={keyAndName}
      showSearch
      filterOption={false}
      options={options}
      onSearch={onSearch}
      onBlur={() => onSearch("")}
      onSelect={(_, option) => {
        if (option) {
          onOptionClick({ value: option.value, label: `${option.label}` });
        }
      }}
      notFoundContent={!options ? <Spin size="small" /> : null}
      style={{ width: "100%" }}
      {...removeUnusedProperty(selectSearchProps)}
    />
  );
}
