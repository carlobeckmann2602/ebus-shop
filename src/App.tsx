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
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartFromStorage());

  // only run on initial app.tsx load to retrieve the persisted cart
  useEffect(() => {
    console.log("init");
    setCartItems(getCartFromStorage());
  }, []);

  // run each time the cart is updated to persist a current version of the cart
  useEffect(() => {
    console.log("update", cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function getCartFromStorage(): CartItem[] {
    const _cart = localStorage.getItem("cart");
    if (_cart && _cart !== "undefined") {
      const parsedCart = JSON.parse(_cart);
      if (parsedCart) {
        return [...parsedCart];
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

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
              resetShop={resetShop}
            />
          }
        />
        <Route
          path="overview"
          element={
            <Overview
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              resetShop={resetShop}
            />
          }
        />
        <Route
          path="checkout"
          element={
            <Checkout
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              resetShop={resetShop}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              resetShop={resetShop}
            />
          }
        />
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

  function resetShop() {
    setCartItems([]);
  }

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
