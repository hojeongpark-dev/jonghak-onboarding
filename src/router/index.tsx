import { Route, Routes } from "react-router-dom";
import React from "react";
import { PAGES } from "../constants/pages";
import Home from "../page/Home";

export default function PageRouter() {
  return (
    <Routes>
      {PAGES.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
