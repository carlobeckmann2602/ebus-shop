import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function PaypalOverview() {
  return <OverviewLayout title={PaymentType.PayPal} content={<div></div>} />;
}
