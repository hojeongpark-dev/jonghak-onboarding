import { Menu } from "antd";
import React from "react";
import recordToArray from "../../../util/record";

interface CategoryFilterProps<Category> {
  categories: Category;
  defaultSelectedKeys?: Array<keyof Category>;
  onClickCategory?: (key: keyof Category) => void;
}

export default function CategoryFilter<C>({
  onClickCategory,
  categories,
  defaultSelectedKeys = [],
}: CategoryFilterProps<C>): JSX.Element {
  return (
    <Menu
      theme="dark"
      mode={"horizontal"}
      defaultSelectedKeys={defaultSelectedKeys as string[]}
      onClick={({ key }) => onClickCategory && onClickCategory(key as keyof C)}
    >
      {recordToArray(categories).map(([key, label]) => (
        <Menu.Item key={`${key}`}>{label}</Menu.Item>
      ))}
    </Menu>
  );
}
