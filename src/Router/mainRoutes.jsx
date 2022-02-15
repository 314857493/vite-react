import React from "react";
import { lazy } from "react";

const routes = [
  {
    path: "overview",
    component: lazy(() => import("@/page/index")),
    title: "概览",
    name: "overview",
    requireAuth: false,
  },
  {
    path: "testPage",
    component: lazy(() => import("@/page/TestPage")),
    title: "测试页",
    name: "testPage",
    requireAuth: false,
  },
  {
    path: "666",
    title: "666",
    name: "666",
    component: () => <>123</>,
    requireAuth: true,
  },
  {
    path: "cats",
    title: "猫猫管理",
    name: "cats",
    children: [
      {
        path: "cats/catsList",
        component: lazy(() => import("@/page/Main/Cats")),
        title: "猫猫列表",
        name: "cats.catsList",
        requireAuth: true,
      },
    ],
  },
];

export default routes;