import Home from "./pages/Home";
import Images from "./pages/Images";
import Labeling from "./pages/Labeling";
import Annotations from "./pages/Annotations";

import { FC } from "react";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "images-route",
    title: "Images",
    path: "/images",
    enabled: true,
    component: Images,
  },
  {
    key: "labeling-route",
    title: "Labeling",
    path: "/labeling",
    enabled: true,
    component: Labeling,
  },
  {
    key: "annotations-route",
    title: "Annotations",
    path: "/annotating",
    enabled: true,
    component: Annotations,
  },
];
