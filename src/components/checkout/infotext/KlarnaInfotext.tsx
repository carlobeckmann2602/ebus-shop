import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function KlarnaInfotext() {
  return <InfotextLayout title={PaymentType.Klarna} content={<div></div>} />;
}
