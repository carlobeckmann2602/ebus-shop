import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";

export default function ApplePayOverview() {
  return (
    <OverviewLayout
      title={PaymentType.ApplePay}
      content={
        <div>
          <p>
            Apple Pay ist im Vergleich zu vielen anderen Online-Zahlungsmethoden
            sehr sicher. Die Gründe dafür sind{" "}
          </p>
          <br />
          <ul>
            <li>
              <b>Sicherer Datenaustausch:</b> Kreditkartendaten werden nur beim
              Hinzufügen einer neuen Karte ausgetauscht. Das reduziert das
              Risiko eines Datenlecks erheblich.
            </li>
            <br />
            <li>
              <b>Schutz vor Man-in-the-Middle-Angriffen:</b> Ein
              Man-in-the-Middle-Angriff ist nur beim Hinzufügen einer neuen
              Karte und nicht während einer Transaktion möglich. Bei
              Transaktionen werden nur verschlüsselte Daten mit Schlüsseln
              übertragen, die bereits auf den Geräten gespeichert sind. Das
              macht es für Angreifer extrem schwierig, die Daten abzufangen und
              zu entschlüsseln.
            </li>
            <br />
            <li>
              <b>Datenschutz:</b> Obwohl Apple Metadaten über ihre Transaktionen
              erhält, speichert Apple die originalen Kartennummern nicht und hat
              auch keinen Zugriff darauf. Dadurch werden ihre persönlichen
              Zahlungsinformationen geschützt.
            </li>
            <br />
            <li>
              <b>Unterstützung durch Zahlungsnetzwerke:</b> Apple Pay
              funktioniert nur, wenn ihr Zahlungsnetzwerk das Verfahren
              unterstützt. Dadurch wird sichergestellt, dass die Transaktionen
              den Sicherheitsstandards ihres Zahlungsnetzwerks entsprechen.
            </li>
            <br />
            <li>
              <b>Gerätespezifisch:</b> Apple Pay funktioniert nur auf Apple
              Geräten, die strenge Sicherheitsstandards erfüllen. Dies trägt zur
              allgemeinen Sicherheit von Apple Pay bei.
            </li>
          </ul>
          <br />
          <p>
            Zusammenfassend lässt sich sagen, dass Apple Pay eine sichere und
            zuverlässige Methode für Online-Zahlungen ist. Es verwendet
            fortschrittliche Verschlüsselungstechnologien und
            Sicherheitsmaßnahmen, um die Sicherheit der Nutzer zu gewährleisten.
            Es ist jedoch wichtig zu beachten, dass keine Methode zu 100 %
            sicher ist und dass die Nutzer stets wachsam sein sollten, um ihre
            persönlichen Daten zu schützen.
          </p>
        </div>
      }
    />
  );
}
