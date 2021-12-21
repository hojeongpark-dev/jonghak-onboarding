import { Route, Routes } from "react-router-dom";
import React from "react";
import { PAGES } from "../constants/pages";
import Home from "../page/Home";
import useMyInfo from "../apis/myInfo";

export default function PageRouter() {
  const { data, isLoading, error } = useMyInfo();
  // 페이지 접근시 유저객체가 있으면 isPrivate 접근 가능
  // 아니면 login으로 리다이렉트 시켜줘야 함
  return (
    <Routes>
      {PAGES.map(({ path, Element, isPrivate }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
