import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./mainRoutes";
import Sider from "@/page/Main/Sider";

const generateRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      return generateRouter(item.children);
    }
    const Component = item.component;
    return (
      <Route
        path={item.path}
        key={item.name}
        element={
          <Suspense fallback={<div>加载中...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  });
};
const MainRoute = () => {
  return (
    <>
      <Sider />
      <div style={{ flex: 1 }}>
        <Routes>{generateRouter(routes)}</Routes>
      </div>
    </>
  );
};

export default MainRoute;
