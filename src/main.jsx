import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Authprovider from "./AuthProvider/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import FindBlood from "./components/FindBlood/FindBlood.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import About from "./components/About/About.jsx";
import DonerRegister from "./components/DonorRegister/DonerRegister.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/find",
        element: (
          <PrivateRoute>
            <FindBlood />
          </PrivateRoute>
        ),
      },
      {
        path: "/donor",
        element: <DonerRegister />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
      <Toaster />
    </Authprovider>
  </React.StrictMode>
);
