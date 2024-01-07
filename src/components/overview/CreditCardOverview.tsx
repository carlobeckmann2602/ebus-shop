import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function CreditCardOverview() {
  return (
    <OverviewLayout
      title={PaymentType.CreditCard}
      content={
        <div className="flex flex-col gap-4">
          {/*FAZIT*/}
          <p>
            Die Kreditkarte ist eine der beliebtesten Zahlungsmethoden im
            E-Commerce. Sie ist einfach zu bedienen und bietet dem Käufer einen
            Käuferschutz. Der Händler erhält eine Zahlungsgarantie und kann die
            Bestellung sofort bearbeiten.
          </p>
          <p>
            Die EU-Richtlinie PSD2 (Payment Service Directive 2) und das daraus
            resultierende 3D-Secure bieten zusätzliche Sicherheit für den Käufer
            und den Händler. Die Kreditkarte ist eine gute Wahl für den Händler,
            da sie einfach zu implementieren ist und die meisten Kunden eine
            Kreditkarte besitzen.
          </p>
        </div>
      }
    />
  );
}
