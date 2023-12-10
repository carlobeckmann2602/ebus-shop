import { CartItem } from "../../commons";

type PaymentSummaryProps = {
  cartItems: CartItem[];
};

export default function PaymentSummary(props: PaymentSummaryProps) {
  return (
    <div className="flex flex-row justify-between text-lg font-medium">
      <span>Gesamtbetrag für ihre Bestellung: </span>
      <span>
        {props.cartItems
          .reduce(
            (accumulator, item) =>
              accumulator + parseFloat(item.price) * item.quantity,
            0
          )
          .toFixed(2)}{" "}
        €
      </span>
    </div>
  );
}
