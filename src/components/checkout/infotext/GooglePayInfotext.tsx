import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

export default function GooglePayInfotext() {
  return (
    <InfotextLayout
      title={PaymentType.GooglePay}
      content={
        <div>
          <h2 className="text-lg font-bold mb-4">
            Zahlungsabwickelung mit Google Pay
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
              Google Pay aus, indem Sie auf den Button "Bezahlen" klicken.
            </span>
          </div>

          <p className="mb-4">
            Der genaue technische Ablauf des Bezahlvorgangs bei Google ist durch
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
              1. Zahlungsanforderung
            </div>
            <div className="collapse-content">
              <p>
                Wenn sie auf die Schaltfläche “Google Pay” klicken, wird ein
                Zahlungsblatt angezeigt, das die in ihrem Google-Konto
                gespeicherten Zahlungsmethoden sowie optionale Felder wie ein
                Versandadressfeld anzeigt. Sie können schnell eine
                Zahlungsmethode auswählen, eine optionale Versandadresse
                hinzufügen oder neue Informationen hinzufügen.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              2. Tokenisierung
            </div>
            <div className="collapse-content">
              <p>
                Google Pay verwendet ein Verfahren namens Tokenisierung, um die
                Sicherheit zu erhöhen. Anstatt ihrer tatsächliche Kartennummer
                zu verwenden, erstellt Google Pay eine verschlüsselte Version
                ihrer Karteninformationen, die als “Token” bezeichnet wird.
                Dieser Token wird anstelle ihrer tatsächlichen
                Karteninformationen verwendet, um Zahlungen zu autorisieren.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              3. Kommunikation mit der Bank
            </div>
            <div className="collapse-content">
              <p>
                Nachdem Sie die Zahlung autorisiert haben, sendet Google Pay die
                Zahlungsanforderung zusammen mit dem Token an ihre Bank. Ihre
                Bank verarbeitet die Anfrage und sendet die Transaktionsdetails
                an Google Pay.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse bg-primary text-primary-content mb-2"
          >
            <div className="collapse-title text-xl font-medium">
              4. Bestätigung an den Verkäufer
            </div>
            <div className="collapse-content">
              <p>
                Sobald die Transaktion von ihrer Bank genehmigt wurde, sendet
                Google Pay eine Bestätigung an den Verkäufer, dass die Zahlung
                erfolgreich war. Der Verkäufer erhält das Geld von ihrer Bank,
                nicht von Google Pay.
              </p>
            </div>
          </div>
          <p className="my-4">
            Der gesamte Prozess der Kommunikation zwischen dem Händler und den
            Google-Servern erfolgt über verschlüsselte Verbindungen (HTTPS) und
            unter Verwendung von Authentifizierungsmethoden, um die Sicherheit
            der übermittelten Daten zu gewährleisten. Darüber hinaus verwendet
            Google Sicherheitsmaßnahmen wie Verschlüsselung, Betrugsprävention
            und Überwachung, um die Integrität des Zahlungssystems zu schützen
            und betrügerische Aktivitäten zu erkennen.
          </p>
          <p className="mb-4">
            Bitte beachten Sie, dass die genauen technischen Details je nach
            Integration, Endgerät und kommerzieller bzw. nicht-kommerzieller
            Nutzung von Google Pay variieren können. Ferner überarbeitet Google
            stets seine Systeme, um sie gegen Gefahren und Angriffsmöglichkeiten
            aufzurüsten.
          </p>
        </div>
      }
    />
  );
}
