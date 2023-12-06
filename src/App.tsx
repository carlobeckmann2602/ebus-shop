import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Shop from "./pages/shop.tsx";
import Overview from "./pages/overview.tsx";
import Checkout from "./pages/checkout.tsx";
import Cart from "./pages/cart.tsx";
import { CartItem } from "./commons.ts";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log("cartItems: ", cartItems);
  }, [cartItems]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Shop
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="overview" element={<Overview />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </>,
    ),
  );

  function addToCart(productForCart: CartItem) {
    const indexInCart = getIndexInCart(productForCart);
    if (indexInCart >= 0) {
      cartItems[indexInCart].quantity =
        cartItems[indexInCart].quantity + productForCart.quantity;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, productForCart]);
    }
  }

  function removeFromCart(productForCart: CartItem) {
    const indexInCart = getIndexInCart(productForCart);
    const _cartItems = [...cartItems];
    _cartItems.splice(indexInCart, 1);
    if (indexInCart >= 0) {
      setCartItems([..._cartItems]);
    }
  }

  function getIndexInCart(productForCart: CartItem): number {
    return cartItems.findIndex((productInCart) => {
      return productInCart.id === productForCart.id;
    });
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
