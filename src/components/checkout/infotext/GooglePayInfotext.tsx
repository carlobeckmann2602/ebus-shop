import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function GooglePayInfotext() {
  return <InfotextLayout title={PaymentType.GooglePay} content={<div></div>} />;
}
