import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { NavLink } from "react-router-dom";
import { PAGE_LABELS, PRIVATE_PAGES } from "../../../constants/pages";
import { URLS } from "../../../constants/urls";

export default function CustomSideNav() {
  return (
    <Sider width={200}>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={["subMenu"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key={PAGE_LABELS.HOME}>
          <NavLink to={URLS.HOME}>{PAGE_LABELS.HOME}</NavLink>
        </Menu.Item>
        <SubMenu key="subMenu" title="Features">
          {PRIVATE_PAGES.filter(({ hideMenu }) => !hideMenu).map(
            ({ label, path }, index) => (
              <Menu.Item key={`${label}${index}`}>
                <NavLink to={path}>{label}</NavLink>
              </Menu.Item>
            )
          )}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
