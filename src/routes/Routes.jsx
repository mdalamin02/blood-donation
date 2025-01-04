import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      // {
      //     path: "/",
      //     element: <Home />
      // },
    ],
  },
]);

export default router;
