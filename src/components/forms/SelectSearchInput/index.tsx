import { Select, Spin } from "antd";

import { removeUnusedProperty } from "../../../util/form";
import {
  CustomInputProps,
  SelectSearchInputProps,
} from "../../../types/form/inputProps";
import { SelectSearchFormInfo } from "../../../types/form/formInfos";
import STRING from "../../../constants/strings";

export default function SelectSearchInput({
  keyAndName,
  options,
  onSearch,
  onOptionClick,
  initialValue,
  ...selectSearchProps
}: SelectSearchFormInfo &
  SelectSearchInputProps &
  CustomInputProps): JSX.Element {
  return (
    <Select
      key={keyAndName}
      showSearch
      options={options}
      onSearch={onSearch}
      filterOption={false}
      style={{ width: "100%" }}
      defaultValue={initialValue?.label}
      onBlur={() => onSearch(STRING.EMPTY)}
      notFoundContent={!options ? <Spin size="small" /> : null}
      onSelect={(_, option) => {
        onOptionClick?.({ value: option.value, label: `${option.label}` });
      }}
      {...removeUnusedProperty(selectSearchProps)}
    />
  );
}
