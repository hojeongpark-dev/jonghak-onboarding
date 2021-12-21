import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { NavLink } from "react-router-dom";
import { NAV_PAGES, URL_LABELS, URLS } from "../../constants/pages";

export default function CustomSideNav() {
  return (
    <Sider width={200}>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={["subMenu"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key={URL_LABELS.HOME}>
          <NavLink to={URLS.HOME}>{URL_LABELS.HOME}</NavLink>
        </Menu.Item>
        <SubMenu key="subMenu" title="Features">
          {NAV_PAGES.map(({ label, path }, index) => (
            <Menu.Item key={`${label}${index}`}>
              <NavLink to={path}>{label}</NavLink>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
