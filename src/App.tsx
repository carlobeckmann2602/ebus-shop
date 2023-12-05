import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Shop from "./pages/shop.tsx";
import Overview from "./pages/overview.tsx";
import Checkout from "./pages/checkout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Shop />} />
      <Route path="overview" element={<Overview />} />
      <Route path="checkout" element={<Checkout />} />
    </>,
  ),
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
