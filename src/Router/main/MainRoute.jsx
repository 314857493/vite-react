import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./mainRoutes";
import Sider from "@/page/Main/Sider";
import RouterWrapper from "../RouteWrapper";

const generateRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      return generateRouter(item.children);
    }
    const { element: Element } = item;

    return (
      <Route
        path={item.path}
        key={item.name}
        element={<RouterWrapper element={<Element />} title={item.title} />}
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
