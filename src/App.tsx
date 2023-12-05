import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Shop from "./pages/shop.tsx";
import Overview from "./pages/overview.tsx";
import Checkout from "./pages/checkout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
