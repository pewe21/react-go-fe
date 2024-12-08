import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product.tsx";
import ProductCreate from "./components/Product/Create.tsx";
import ProductEdit from "./components/Product/Edit.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/create",
    element: <ProductCreate />,
  },
  {
    path: "/product/edit/:id",
    element: <ProductEdit />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
