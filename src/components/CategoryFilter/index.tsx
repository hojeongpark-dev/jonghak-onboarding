import { Menu } from "antd";
import React from "react";
import recordToArray from "../../util/record";

interface Props<Category> {
  defaultSelectedKeys?: Array<keyof Category>;
  categories: Category;
  onClickCategory: (key: keyof Category) => void;
}

export default function CategoryFilter<C>({
  onClickCategory,
  categories,
  defaultSelectedKeys = [],
}: Props<C>): JSX.Element {
  return (
      <Menu
        theme="dark"
        mode={"horizontal"}
        defaultSelectedKeys={defaultSelectedKeys as string[]}
        onClick={({ key }) => onClickCategory(key as keyof C)}
      >
        {recordToArray(categories).map(([key, label]) => (
          <Menu.Item key={`${key}`}>{label}</Menu.Item>
        ))}
      </Menu>
  );
}
