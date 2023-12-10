import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function KlarnaOverview() {
  return <OverviewLayout title={PaymentType.Klarna} content={<div></div>} />;
}
