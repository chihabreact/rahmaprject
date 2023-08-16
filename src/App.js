import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home/home.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import DashboardProducts from "./components/dashboard-products/dashboard-products.component";
import AddProductDashboardForm from "./components/add-product-dashboard-form/add-product-dashboard-form.component";
import AddCategoryDashboardForm from "./components/add-category-dashboard-form/add-category-dashboard-form.component";
import Login from "./routes/Login/Login";
import ProductsPage from "./routes/Products/ProductsPage";
import ProductsDetails from "./components/products-details/products-details.component";

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
        path: "Products",
        children: [
          {
            path: "",
            element: <ProductsPage />,
          },
          {
            path: ":id",
            element: <ProductsDetails />,
          }
        ]
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


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App