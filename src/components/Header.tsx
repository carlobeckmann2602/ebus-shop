import { RotateCcw } from "lucide-react";
import { CartItem } from "../commons.ts";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  cartItems: CartItem[];
  removeFromCart: (product: CartItem) => void;
  resetShop: () => void;
};

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();

  function sumUpCart() {
    let sum = 0.0;
    props.cartItems.forEach((item) => {
      sum += parseFloat(item.price) * item.quantity;
    });
    return sum.toString();
  }

  function resetShop() {
    props.resetShop();
    navigate("/");
  }

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <div className="tooltip tooltip-right" data-tip="Zurücksetzen">
          <button
            onClick={() => {
              resetShop();
            }}
            className="btn btn-ghost text-xl"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 text-3xl">
        <a href="/">E-Bus Shop</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {props.cartItems.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-75 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {props.cartItems.length} Produkte
              </span>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Anzahl</th>
                    <th>Einzelpreis</th>
                    <th>Gesamtpreis</th>
                    <th>Entfernen</th>
                  </tr>
                </thead>
                <tbody>
                  {props.cartItems.map((item) => {
                    return (
                      <tr key={"cart-item-" + item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{parseFloat(item.price) * item.quantity}</td>
                        <td onClick={() => props.removeFromCart(item)}>X</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="px-4 flex justify-between">
                <span className="text-info">Summe</span>
                <span>{sumUpCart()}</span>
              </div>
              <div className="card-actions">
                <a
                  href="/checkout"
                  className={`btn btn-primary btn-block ${
                    props.cartItems.length === 0 ? "btn-disabled" : ""
                  }`}
                >
                  Weiter zum Bezahlvorgang
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="src/assets/images/header/max_mustermann.jpg"
                className="object-top"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="menu-title">
              <span>Max Mustermann</span>
            </li>
            <li>
              <a href={"/"}>Shop</a>
            </li>
            <li>
              <a href={"/checkout"}>Checkout</a>
            </li>
            <li>
              <a href={"/overview"}>Übersicht</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
