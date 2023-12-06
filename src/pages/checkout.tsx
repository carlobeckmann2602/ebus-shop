import AllPayments from "../components/checkout/AllPayments.tsx";
import Layout from "./_layout.tsx";

export default function Checkout() {
  return (
    <Layout>
      <h1>Bezahlverfahren</h1>
      <AllPayments />
    </Layout>
  );
}
