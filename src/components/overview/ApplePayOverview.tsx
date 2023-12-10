import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function ApplePayOverview() {
  return <OverviewLayout title={PaymentType.ApplePay} content={<div></div>} />;
}
