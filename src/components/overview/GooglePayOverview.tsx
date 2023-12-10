import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function GooglePayOverview() {
  return <OverviewLayout title={PaymentType.GooglePay} content={<div></div>} />;
}
