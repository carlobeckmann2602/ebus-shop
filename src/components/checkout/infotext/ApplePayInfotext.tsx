import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function ApplePayInfotext() {
  return <InfotextLayout title={PaymentType.ApplePay} content={<div></div>} />;
}
