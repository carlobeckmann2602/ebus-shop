import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function ApplePayInfotext() {
  return (
    <InfotextLayout
      title={PaymentType.ApplePay}
      content={
        <div>
          <h2 className="text-lg font-bold mb-4">
            Zahlungsabwickelung mit Apple Pay
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
              Apple Pay aus, indem Sie auf den Button "Bezahlen" klicken.
            </span>
          </div>

          <p className="mb-4">
            Der genaue technische Ablauf des Bezahlvorgangs bei Apple ist durch
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
              1. Verschlüsselte Transaktion empfangen
            </div>
            <div className="collapse-content">
              <p>
                Wenn sie eine Zahlung mit Apple Pay durchführen, sendet ihr
                Gerät eine verschlüsselte Version der Transaktionsdaten an Apple
                Pay.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              2. Wiederverschlüsselung mit dem Schlüssel des Entwicklers
            </div>
            <div className="collapse-content">
              <p>
                Apple Pay verschlüsselt diese Daten wieder mit einem speziellen
                Schlüssel, den nur der Entwickler der App oder Website kennt.
                Damit ist sichergestellt, dass nur der Entwickler die Daten
                entschlüsseln und lesen kann.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              3. Senden der Transaktionsdaten
            </div>
            <div className="collapse-content">
              <p>
                Die doppelt verschlüsselten Transaktionsdaten werden dann an den
                Entwickler der Website oder an den Zahlungsabwickler gesendet.
                Es ist wichtig zu beachten, dass die Domain, an die die Daten
                gesendet werden, immer verifiziert werden muss, um
                sicherzustellen, dass die Daten den richtigen Empfänger
                erreichen.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              4. Übertragung der Geräte-Accountnummer und des Sicherheitscodes
            </div>
            <div className="collapse-content">
              <p>
                Zusammen mit den Transaktionsdaten sendet Apple Pay auch ihre
                Geräte-Accountnummer und einen transaktionsspezifischen,
                dynamischen Sicherheitscode an die App oder Website. Weder Apple
                noch ihr Gerät senden die tatsächliche Nummer ihrer
                Zahlungskarte an die Website. Dadurch wird sichergestellt, dass
                ihre Kartendaten sicher bleiben.
              </p>
            </div>
          </div>
          <div
            tabIndex={4}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              5. Autorisierung der Transaktion auf einem anderen Apple Gerät
            </div>
            <div className="collapse-content">
              <p>
                Wenn die Transaktion auf einem anderen Apple Gerät autorisiert
                wird, kommunizieren das Gerät, auf dem die Transaktion initiiert
                wurde (z. B. ihr Mac), und das Gerät, das zur Autorisierung
                verwendet wird (z. B. ihr iPhone oder ihre Apple Watch), über
                einen verschlüsselten Kanal auf den Apple Servern. Dadurch wird
                sichergestellt, dass die Kommunikation zwischen den Geräten
                sicher ist und die Transaktionsdaten nicht abgefangen werden
                können. Apple bewahrt anonymisierte Transaktionsdaten auf,
                darunter der ungefähre Kaufbetrag, der Name des
                Webseiten-Entwicklers und der Website, das ungefähre Datum und
                die ungefähre Uhrzeit sowie die Angabe, ob die Transaktion
                erfolgreich abgeschlossen wurde. Apple nutzt diese Daten zur
                Verbesserung von Apple Pay und anderen Produkten und Diensten.
              </p>
            </div>
          </div>
          <p className="my-4">
            Der gesamte Prozess der Kommunikation zwischen dem Händler und den
            Apple-Servern erfolgt über verschlüsselte Verbindungen (HTTPS) und
            unter Verwendung von Authentifizierungsmethoden, um die Sicherheit
            der übermittelten Daten zu gewährleisten. Darüber hinaus verwendet
            Apple Sicherheitsmaßnahmen wie Verschlüsselung, Betrugsprävention
            und Überwachung, um die Integrität des Zahlungssystems zu schützen
            und betrügerische Aktivitäten zu erkennen.
          </p>
          <p className="mb-4">
            Bitte beachten Sie, dass die genauen technischen Details je nach
            Integration, Endgerät und kommerzieller bzw. nicht-kommerzieller
            Nutzung von Apple Pay variieren können. Ferner überarbeitet Apple
            stets seine Systeme, um sie gegen Gefahren und Angriffsmöglichkeiten
            aufzurüsten.
          </p>
        </div>
      }
    />
  );
}
