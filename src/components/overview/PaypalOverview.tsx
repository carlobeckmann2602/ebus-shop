import { PaymentType } from "../../constants/PaymentTypes";
import OverviewLayout from "./OverviewLayout";
import payPalSummary from "../../assets/images/demoModals/paypal/summary.png";

export default function PaypalOverview() {
  return (
    <OverviewLayout
      title={PaymentType.PayPal}
      content={
        <>
          <p>
            Der Bezahlvorgang über PayPal kann als vergleichsweise sicher
            betrachtet werden. Das hängt mit der Nutzerauthentifizierung und der
            Trennung von Order und Checkout Systemen zusammen. Insbesondere die
            Nutzerauthentifizierung kann mithilfe eines zweistufigen Systems,
            beispielsweise der sogenannten "Zwei-Faktor-Autorisierung",
            erweitern werden, um eine höhere Sicherheitsstufe zu erlangen.
          </p>
          <br />
          <p>
            Abschließend lässt sich festhalten, dass sensibelste Stelle im
            Bezahlvorgang mit PayPal, der Nutzer selbst ist. So sollte stets von
            Seiten des Nutzenden darauf geachtet werden, dass eine
            verschlüsselte Verbindung verwendet wird. Ferner ist es ratsam, die
            aufgerufenen URLs auf Schreibfehler zu prüfen und einen Blick in das
            jeweilige Impressum eines Online Shops zu werfen. Seriöse
            Onlinehändler geben hier stets Daten an, die beispielsweise durch
            einen simplen Anruf geprüft werden können.
          </p>
          <br />
          <p>
            Die nachfolgende Grafik fasst alle Sessions zusammen. Dabei wird
            noch einmal deutlich, dass diese aufeinander aufbauen und auf Seiten
            von PayPal an drei verschiedenen Systemen hängen.
          </p>
          <img
            src={payPalSummary}
            alt={
              "Zusammenfassung der verschiedenen Sessions eines Bezahlvorganges via PayPal"
            }
          ></img>
        </>
      }
    />
  );
}
