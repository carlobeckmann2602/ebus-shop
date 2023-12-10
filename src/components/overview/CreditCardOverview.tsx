import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function CreditCardOverview() {
  return (
    <OverviewLayout title={PaymentType.CreditCard} content={<div></div>} />
  );
}
