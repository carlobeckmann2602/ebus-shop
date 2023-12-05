import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from "react";
import Shop from "./pages/shop.tsx";
import Overview from "./pages/overview.tsx";
import Checkout from "./pages/checkout.tsx";
import Cart from "./pages/cart.tsx";
import { CartItem } from "./commons.ts";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Shop cartItems={cartItems} addToCart={addToCart} />}
        />
        <Route path="overview" element={<Overview />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </>,
    ),
  );
  function addToCart(product: CartItem) {
    setCartItems([...cartItems, product]);
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
