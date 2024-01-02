import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function GooglePayOverview() {
  return (
    <OverviewLayout
      title={PaymentType.GooglePay}
      content={
        <>
          <h2 className="text-lg font-semibold leading-6 my-2">
            Sicherheit von Google Pay im Vergleich zu anderen Bezahlverfahren
          </h2>
          <p>
            Google Pay ist im Vergleich zu herkömmlichen Zahlungsmethoden sehr
            sicher, da es auf Tokenisierung basiert. Dabei werden virtuelle
            Kontonummern verwendet, die nicht die tatsächlichen
            Kreditkartendaten des Nutzers enthalten. Durch dieses Verfahren
            haben Händler keinen Zugriff auf die gespeicherten Informationen.
            Google Pay verwendet fortschrittliche Verschlüsselungstechniken, um
            die Datenübertragung zu schützen. Biometrische
            Authentifizierungsmethoden wie Fingerabdruck- und Gesichtserkennung
            sind ebenfalls integriert.
          </p>
          <h2 className="text-lg font-semibold leading-6 my-2">
            Sicherheitslücken bei Google Pay
          </h2>
          <p>
            Trotz der hohen Sicherheitsstandards gab es in der Vergangenheit
            Berichte über Sicherheitslücken bei Google Pay. Beispielsweise
            nutzten Betrüger eine Sicherheitslücke bei PayPal, um größere Summen
            von verschiedenen Konten in den USA zu überweisen. Google Pay bleibt
            also über die verwendete Zahlungsmethode angreifbar.
          </p>
          <p>
            Es ist wichtig zu wissen, dass keine Zahlungsmethode vollständig vor
            Sicherheitslücken geschützt ist. Nutzerinnen und Nutzer sollten
            daher stets wachsam sein und ihre Konten regelmäßig überprüfen. Bei
            verdächtigen Aktivitäten sollten sie sich umgehend mit ihrer Bank
            oder ihrem Zahlungsdienstleister in Verbindung setzen.
          </p>
        </>
      }
    />
  );
}
