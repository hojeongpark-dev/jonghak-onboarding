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
      defaultValue={initialValue?.label}
      showSearch
      filterOption={false}
      options={options}
      onSearch={onSearch}
      onBlur={() => onSearch(STRING.EMPTY)}
      onSelect={(_, option) => {
        if (option) {
          onOptionClick?.({ value: option.value, label: `${option.label}` });
        }
      }}
      notFoundContent={!options ? <Spin size="small" /> : null}
      style={{ width: "100%" }}
      {...removeUnusedProperty(selectSearchProps)}
    />
  );
}
