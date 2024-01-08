import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

const steps = [
  {
    title: "1. Authorization",
    content: (
      <>
        <p>
          In diesem Schritt wird mit 3D Secure geprüft, ob der Karteninhaber
          tatsächlich der Besitzer der Kreditkarte ist und ob er genügend Geld
          auf der Kreditkarte hat.
        </p>
      </>
    ),
  },
  {
    title: "2. Clearing",
    content: (
      <>
        <p>
          In diesem Schritt wird die Zahlung vom Karteninhaber an den Händler
          autorisiert. Das Geld wird jedoch noch nicht an den Händler
          ausgezahlt, sondern zurückgehalten.
        </p>
      </>
    ),
  },
  {
    title: "3. Settlement",
    content: (
      <>
        <p>
          Beim "Settlement" wird das Geld vom Karteninhaber an den Händler
          ausgezahlt. Dieser Schritt erfolgt in der Regel ein paar Tage nach dem
          "Clearing".
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
            Die folgenden Abschnitte beschreiben diese knapp nacheinander.
            Klicken Sie dazu auf die nummerierten Reiter.
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
              <div className="collapse-content flex flex-col gap-4">
                {step.content}
              </div>
            </div>
          ))}

          <p className="my-4">
            Um mehr über die technischen Hintergründe zu erfahren, klicken sie
            im Bestellprozess auf den Button "Bezahlen" und folgen Sie dem
            interaktiven Bezahlvorgang.
          </p>
        </div>
      }
    />
  );
}
