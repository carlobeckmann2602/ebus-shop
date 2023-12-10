import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function CreditCardInfotext() {
  return (
    <InfotextLayout title={PaymentType.CreditCard} content={<div></div>} />
  );
}
