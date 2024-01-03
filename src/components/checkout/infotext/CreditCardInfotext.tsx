import { PaymentType } from "../../../constants/PaymentTypes";
import InfotextLayout from "./InfotextLayout";

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

          {[...Array(5).keys()].map((index) => (
            <div
              key={index}
              tabIndex={index}
              className="collapse bg-primary text-primary-content mb-2"
            >
              <div className="collapse-title text-xl font-medium">
                {index + 1}. Schritt
              </div>
              <div className="collapse-content">
                <p>
                  Beispieltext für den Schritt {index + 1} bei
                  Kreditkartenbezahlungen.
                </p>
              </div>
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
