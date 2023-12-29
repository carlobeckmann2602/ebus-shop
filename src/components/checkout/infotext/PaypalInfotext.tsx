import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function PaypalInfotext() {
  return (
    <InfotextLayout
      title={PaymentType.PayPal}
      content={
        <div>
          <h2 className="text-lg font-bold mb-4">
            Zahlungsabwickelung mit PayPal
          </h2>
          <div role="alert" className="alert alert-info mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Probieren Sie die interaktive Simulation eines Bezahlvorgangs über
              PayPal aus, indem Sie auf den Button "Bezahlen" klicken.
            </span>
          </div>

          <p className="mb-4">
            Der genaue technische Ablauf des Bezahlvorgangs bei PayPal ist durch
            verschiedene Schritte gekennzeichnet, die im Hintergrund ablaufen.
          </p>
          <p className="mb-4">
            Die folgenden Abschnitte beschreiben diese nach einander. Klicken
            Sie dazu auf die nummerierten Reiter.
          </p>
          <div
            tabIndex={0}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              1. API-Aufrufe
            </div>
            <div className="collapse-content">
              <p>
                Wenn ein Kunde sich für PayPal als Zahlungsmethode entscheidet,
                initiiert die Website oder Anwendung des Händlers einen
                API-Aufruf an die PayPal-Server. Dieser Aufruf enthält
                Informationen zur Transaktion, wie den Betrag, die Währung und
                den Verwendungszweck.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              2. Weiterleitung zu PayPal
            </div>
            <div className="collapse-content">
              <p>
                Der Kunde wird dann von der Händlerseite zu PayPal
                weitergeleitet, um die Transaktion zu autorisieren. Hier gibt
                der Kunde seine PayPal-Anmeldeinformationen ein oder bestätigt
                die Zahlung über andere zur Verfügung stehende
                Authentifizierungsmethoden.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              3. Zahlungsautorisierung
            </div>
            <div className="collapse-content">
              <p>
                Nachdem der Kunde die Zahlung autorisiert hat, führt PayPal eine
                Sicherheitsüberprüfung durch und prüft die bereitgestellten
                Zahlungsinformationen (wie Guthaben, hinterlegte Kreditkarten
                oder Bankkonten).
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              4. Zahlungsabwicklung
            </div>
            <div className="collapse-content">
              <p>
                Wenn die Überprüfung erfolgreich verläuft, bestätigt PayPal die
                Transaktion und sendet eine Bestätigung an die Händlerseite.
                Gleichzeitig zieht PayPal den Betrag vom Kundenkonto ab (falls
                keine vorherige PayPal-Guthabenverfügbarkeit besteht) und
                überweist ihn an den Händler.
              </p>
            </div>
          </div>
          <div
            tabIndex={4}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              5. Rückmeldung an den Kunden
            </div>
            <div className="collapse-content">
              <p>
                Der Kunde wird wieder zur Händlerseite zurückgeleitet, wo eine
                Bestätigung der erfolgreichen Zahlung angezeigt wird.
                Gleichzeitig erhält der Händler von PayPal eine Benachrichtigung
                über die erfolgreiche Transaktion.
              </p>
            </div>
          </div>
          <p className="my-4">
            Der gesamte Prozess der Kommunikation zwischen dem Händler und den
            PayPal-Servern erfolgt über verschlüsselte Verbindungen (HTTPS) und
            unter Verwendung von Authentifizierungsmethoden, um die Sicherheit
            der übermittelten Daten zu gewährleisten. Darüber hinaus verwendet
            PayPal Sicherheitsmaßnahmen wie Verschlüsselung, Betrugsprävention
            und Überwachung, um die Integrität des Zahlungssystems zu schützen
            und betrügerische Aktivitäten zu erkennen.
          </p>
          <p className="mb-4">
            Bitte beachten Sie, dass die genauen technischen Details je nach
            Integration, Endgerät und kommerzieller bzw. nicht-kommerzieller
            Nutzung von PayPal variieren können. Ferner überarbeitet PayPal
            stets seine Systeme, um sie gegen Gefahren und Angriffsmöglichkeiten
            aufzurüsten.
          </p>
        </div>
      }
    />
  );
}
