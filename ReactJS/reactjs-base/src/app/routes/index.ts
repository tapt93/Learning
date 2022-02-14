import { lazy } from "react";
import MainLayout from "../components/layout/MainLayout";
import { ILayoutRouter } from "./models";

const Home = lazy(() => import("../pages/Home"));

const routes: ILayoutRouter[] = [
  {
    path: '/*',
    layout: MainLayout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]
export default routes;