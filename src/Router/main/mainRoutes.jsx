import React from "react";
import { lazy } from "react";

const routes = [
  {
    path: "overview",
    element: lazy(() => import("@/page/index")),
    title: "概览",
    name: "overview",
    requireAuth: false,
  },
  {
    path: "testPage",
    element: lazy(() => import("@/page/TestPage")),
    title: "测试页",
    name: "testPage",
    requireAuth: false,
  },
  {
    path: "666",
    title: "666",
    name: "666",
    element: () => <>123</>,
    requireAuth: true,
  },
  {
    path: "cats",
    title: "猫猫管理",
    name: "cats",
    children: [
      {
        path: "cats/catsList",
        element: lazy(() => import("@/page/Main/Cats")),
        title: "猫猫列表",
        name: "cats.catsList",
        requireAuth: true,
      },
    ],
  },
];

export default routes;
