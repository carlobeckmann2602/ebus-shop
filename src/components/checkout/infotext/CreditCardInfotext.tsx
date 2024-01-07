import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

const steps = [
  {
    title: "1. Authorization",
    content: (
      <>
        <p>
          Sobald sie eine Kreditkarte als Zahlungsmittel ausgewählt und auf
          "Bezahlen" geklickt haben werden die Transaktionsdaten und die
          eingegebenen Bezahlinformationen an das Payment Gateway übermittelt.
        </p>
        <p>
          Das Gateway überprüft nun ob die Kreditkarte gültig ist und ob der
          Betrag auf der Kreditkarte verfügbar ist.
        </p>
      </>
    ),
  },
  {
    title: "2. Capture",
    content: (
      <>
        <p>
          Falls der Kreditkarteninhaber genügend Geld auf der Kreditkarte hat
          wird die Zahlung akzeptiert und der "Issuer" hält den Betrag auf der
          Karte zurück.
        </p>
        <p>Nun kann der Händler die Ware versenden.</p>
      </>
    ),
  },
  {
    title: "3. Settlement",
    content: (
      <>
        <p>
          Das zurückgehaltene Geld wird von der Kreditkarte des Karteninhabers
          abgebucht und dem Händler gutgeschrieben. Dies geschieht in der Regel
          innerhalb von 2-3 Tagen.
        </p>
      </>
    ),
  },
];

export default function CreditCardInfotext() {
  return (
    <InfotextLayout
      title={PaymentType.CreditCard}
      content={
        <div>
          <h2 className="text-lg font-bold mb-4">
            Zahlungsabwickelung mit Kreditkarte
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
              Kreditkarte aus, indem Sie auf den Button "Bezahlen" klicken.
            </span>
          </div>

          <p className="mb-4">
            Der genaue technische Ablauf des Bezahlvorgangs bei
            Kreditkartenzahlungen ist durch verschiedene Schritte
            gekennzeichnet, die im Hintergrund ablaufen.
          </p>
          <p className="mb-4">
            Die folgenden Abschnitte beschreiben diese nacheinander. Klicken Sie
            dazu auf die nummerierten Reiter.
          </p>

          {steps.map((step, index) => (
            <div
              key={index}
              tabIndex={index}
              className="collapse bg-primary text-primary-content mb-2"
            >
              <div className="collapse-title text-xl font-medium">
                {step.title}
              </div>
              <div className="collapse-content">{step.content}</div>
            </div>
          ))}

          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptate, quibusdam, quas voluptatem quia
            exercitationem quod quos quae voluptatum dolorum. Quisquam
            voluptatibus, voluptate, quibusdam, quas voluptatem quia
            exercitationem quod quos quae voluptatum dolorum.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptate, quibusdam, quas voluptatem quia
            exercitationem quod quos quae voluptatum dolorum. Quisquam
            voluptatibus, voluptate, quibusdam, quas voluptatem quia
            exercitationem quod quos quae voluptatum dolorum.
          </p>
        </div>
      }
    />
  );
}
