import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function PaypalInfotext() {
  return <InfotextLayout title={PaymentType.PayPal} content={<div></div>} />;
}
