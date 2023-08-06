import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./routes/home/home.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import DashboardProducts from "./components/dashboard-products/dashboard-products.component";
import AddProductDashboardForm from "./components/add-product-dashboard-form/add-product-dashboard-form.component";
import AddCategoryDashboardForm from "./components/add-category-dashboard-form/add-category-dashboard-form.component";
import Login from "./routes/Login/Login";
import ProductsPage from "./routes/Products/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/Products",
        element: <ProductsPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "products",
            element: <DashboardProducts />,
          },
          {
            path: "add-product",
            element: <AddProductDashboardForm />,
          },
          {
            path: "add-category",
            element: <AddCategoryDashboardForm />,
          }
        ],
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
