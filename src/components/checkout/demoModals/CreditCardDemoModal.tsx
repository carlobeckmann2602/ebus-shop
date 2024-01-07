import { ReactNode, useState } from "react";
import AmexIcon from "../../../assets/images/payments/amex.png";
import MastercardIcon from "../../../assets/images/payments/mastercard.png";
import MaestroIcon from "../../../assets/images/payments/mastero.png";
import VisaIcon from "../../../assets/images/payments/visa.png";

import CreditCardPlayerIcon from "../../../assets/images/demoModals/credit-card/credit-card-player.png";
import CreditCardScaIcon from "../../../assets/images/demoModals/credit-card/credit-card-sca.webp";

import PaymentIcon from "../PaymentIcon";
import CreditCardPaymentForm from "../CreditCardPaymentForm";
import CreditCardSmsTanIcon from "../../../assets/images/demoModals/credit-card/credit-card-sms-tan.png";

type CreditCardDemoModalProps = {
  setShowDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function CreditCardDemoModal(props: CreditCardDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const ALL_STEPS = [
    stepPlayer(),
    stepDataBetweenCostumerAndMerchant(),
    stepAuthorization(),
    stepEinschub3DSecure(),
    stepEinschubPSD2(),
    step3DSecure(),
    stepCapture(),
    stepSettlement(),
  ];

  const ALL_DEMOS = [
    demoOne(),
    demoDataBetweenCostumerAndMerchant(),
    demoOne(),
    demoOne(),
    demoOne(),
    demo3DSecure(),
    demoOne(),
    demoOne(),
  ];

  function cancel() {
    props.setShowDemoModal(false);
  }

  function nextPage() {
    setActiveStep((active) => {
      return active < ALL_STEPS.length - 1 ? activeStep + 1 : activeStep;
    });
  }

  function previousPage() {
    setActiveStep((active) => {
      return active > 0 ? activeStep - 1 : activeStep;
    });
  }

  function stepWrapper(
    title: string,
    content: ReactNode,
    isLastStep?: boolean
  ) {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          {title}
        </h3>
        <div>{content}</div>
        <div className="flex flex-row justify-end gap-4">
          {activeStep != 0 && (
            <span
              onClick={previousPage}
              className="btn btn-outline btn-primary"
            >
              Zurück
            </span>
          )}

          {!isLastStep ? (
            <span onClick={nextPage} className="btn btn-primary">
              Weiter
            </span>
          ) : (
            <span
              onClick={() => props.afterModal()}
              className="btn btn-primary"
            >
              Demonstration schließen
            </span>
          )}
        </div>
      </div>
    );
  }

  function demoWrapper(content: ReactNode) {
    return (
      <div className="flex flex-col items-center">
        <div className="h-16 w-32 px-4 py-1 items-center justify-center flex gap-2">
          <PaymentIcon url={AmexIcon} backgroundColor={"#0078D2"} />
          <PaymentIcon url={VisaIcon} />
          <PaymentIcon url={MastercardIcon} />
          <PaymentIcon url={MaestroIcon} />
        </div>
        <div className="my-3 text-center sm:mt-0 sm:text-left w-full min-h-[212px] flex flex-col items-center justify-center gap-16">
          {content}
        </div>
      </div>
    );
  }

  function demoOne() {
    return demoWrapper(
      <span className="loading loading-spinner text-primary scale-150"></span>
    );
  }

  function stepPlayer() {
    return stepWrapper(
      "Die Transaktions-Parteien",
      <div className="flex flex-col gap-2">
        <p>
          Bei einer Zahlung mit Kreditkarte gibt es 4 Parteien, die miteinander
          kommunizieren:
        </p>
        <ul className="list-disc list-inside">
          <li>Customer (Kunde)</li>
          <li>Merchant (Verkäufer)</li>
          <li>Acquirer (Bank des Verkäufers)</li>
          <li>Issuer (Bank des Kunden)</li>
        </ul>
        <p>
          Zusätzlich gibt es noch das Paymentgateway (z.B. “authorize.net”),
          welches als Mittelmann zwischen den Parteien fungiert.
        </p>
        <img src={CreditCardPlayerIcon} alt="Credit Card Player" />
      </div>
    );
  }

  function stepDataBetweenCostumerAndMerchant() {
    return stepWrapper(
      "Eingabe der Kreditkarteninformationen",
      <div className="flex flex-col gap-2">
        <p>
          Der Kunde (Customer) gibt seine Kreditkarteninformationen auf der
          Website des Verkäufers (Merchant) ein. Sobald der Kunde auf “Bezahlen”
          klickt, sendet der Verkäufer die Kreditkarteninformationen an das
          Paymentgateway.
        </p>
      </div>
    );
  }

  function demoDataBetweenCostumerAndMerchant() {
    return demoWrapper(
      <div className="flex flex-col gap-6 justify-center">
        <CreditCardPaymentForm />
        <button className="btn btn-primary">Bezahlen</button>
      </div>
    );
  }

  function stepAuthorization() {
    return stepWrapper(
      "1. Authorization",
      <div className="flex flex-col gap-2">
        <p>
          Das Gateway erhält die Transaktions Informationen und die
          Bezahlinformationen des Kunden vom Verkäufer.
        </p>
        <p>
          Das Gateway prüft zunächst ob der Kunde genug Guthaben hat um die
          Produkte zu bezahlen. Hat der Kunde genug Guthaben, wird der Betrag
          auf der Kreditkarte reserviert bis die Transaktion abgeschlossen ist.
        </p>
        <p>
          Anschließend wird mithilfe von 3D Secure verifiziert, dass der Kunde
          auch wirklich der Besitzer der Kreditkarte ist.
        </p>
      </div>
    );
  }

  function step3DSecure() {
    return stepWrapper(
      "1. Authorization: 3D Secure",
      <div className="flex flex-col gap-2">
        <p>
          Das Gateway fordert im “Authorization” Step eine Risikobewertung des
          Issuers (Bank des Customers) an.
        </p>
        <p>
          Der Issuer bewertet anhand von Faktoren wie Transaktionsvolumen, IP
          Adresse, Gerät, etc. ob es sich um eine betrügerische Transaktion
          handeln könnte.
        </p>
        <ul className="list-disc ml-6">
          <li>
            Wird die Transaktion als “kein Betrug” oder als “möglicherweise
            Betrug” gewertet, wird der Kunde aufgefordert sich zu verifizieren.
          </li>
          <li>
            Wird die Transaktion als “Betrug” gewertet, wird die Transaktion
            abgelehnt.
          </li>
        </ul>
        <h1 className="font-bold">3D Secure Verifizierung: </h1>
        <p>
          Falls der Kunde aufgefordert wird sich zu verifizieren, wird dieser
          auf eine Seite des Issuers weitergeleitet.
        </p>
        <p>
          Dort wird der Kunde aufgefordert sich per 3D Secure zu verifizieren.
          Diese Verifizierung kann z.B. per SMS-Tan oder Fingerabdruck in der
          Banking App erfolgen (siehe "3D Secure" und "PSD2").
        </p>
      </div>
    );
  }

  function demo3DSecure() {
    return demoWrapper(
      <div className="flex flex-col gap-6 justify-center">
        <img src={CreditCardSmsTanIcon} alt="Credit Card SMS Tan" />
      </div>
    );
  }

  function stepEinschub3DSecure() {
    return stepWrapper(
      "Einschub: 3D Secure",
      <div className="flex flex-col gap-2">
        <p>
          3D Secure ist ein Verfahren zur Authentifizierung von
          Kreditkartenzahlungen. Es wurde von den Kreditkartenunternehmen Visa
          und Mastercard entwickelt und wird unter den Markennamen "
          <a
            href="https://www.visa.de/bezahlen-mit-visa/genutzte-technologien/visa-secure.html"
            target="_blank"
          >
            Visa Secure
          </a>
          " und "
          <a
            href="https://www.mastercard.de/de-de/mastercard-fuer-sie/so-funktioniert-bezahlen/idcheck.html"
            target="_blank"
          >
            Mastercard Identity Check
          </a>
          " vertrieben.
        </p>
        <p>
          3D Secure fügt einen zusätzlichen Verifizierungsschritt beim Bezahlen
          mit Kreditkarte hinzu. Der Karteninhaber identifiziert sich über seine
          Bank, z.B. mit einer SMS-Tan oder einem Fingerabdruck in der Banking
          App. Dies erschwert den Diebstahl und Missbrauch von
          Kreditkartendaten.
        </p>

        <p>
          Beim Bezahlvorgang prüft die Bank die Zahlung und autorisiert sie. 3D
          Secure schützt Verbraucher und gibt ihnen Vertrauen in
          Online-Shopping.
        </p>

        <p>
          3D Secure wird unteranderem von der PSD2 EU-Richtlinie verpflichtend
          gemacht (siehe "PSD2").
        </p>
      </div>
    );
  }

  function stepEinschubPSD2() {
    return stepWrapper(
      "Einschub: PSD2",
      <div className="flex flex-col gap-4">
        <p>
          Die Payment Services Directive 2 (
          <a
            href="https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/psd2/psd2-775434"
            target="_blank"
          >
            PSD2
          </a>
          ) ist eine EU-Richtlinie zur Regulierung von Zahlungsdienstleistern.
          Sie ist seit dem 13. Januar 2018 in Kraft und gilt seit dem 14.
          September 2019 verbindlich in allen EU-Mitgliedstaaten.
        </p>

        <div>
          <h1 className="font-bold">Ziele der PSD2:</h1>
          <ul className="list-disc ml-6">
            <li>
              Erhöhung der Sicherheit von elektronischen Zahlungen und des
              Datenschutzes
            </li>
            <li>
              Förderung des Wettbewerbs durch die Öffnung des Marktes für neue
              Zahlungsdienstleister
            </li>
            <li>Erhöhung der Verbraucherrechte</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">Starke Kundenauthentifizierung (SCA):</h1>
          <p>
            Durch die PSD2 wird die starke Kundenauthentifizierung (SCA)
            verpflichtend. Das heißt, dass die Kreditkartenunternehmen Visa und
            Mastercard die 3D Secure Verifizierung für alle Zahlungen
            verpflichtend machen.
          </p>
          <p>
            Um eine starke Kundenauthentifizierung zu gewährleisten, muss sich
            der Kunde bei einer Zahlung mit zwei der folgenden drei Faktoren
            authentifizieren:
          </p>
          <img src={CreditCardScaIcon} alt="Credit Card SCA" />
        </div>

        <div>
          <h1 className="font-bold">
            Kontoschnittstellen für Zahlungsdrittanbieter:
          </h1>
          <p>
            Die PSD2 verpflichtet Banken dazu, Kontoschnittstellen für
            Zahlungsdrittanbieter bereitzustellen. Das heißt, dass Banken
            Schnittstellen für Drittanbieter wie z.B. Paypal, Klarna, etc.
            bereitstellen müssen.
          </p>
        </div>

        <div>
          <h1 className="font-bold">Gebühren für Kreditkartenzahlungen:</h1>
          <p>
            Durch die PSD2 dürfen Gebühren für Kreditkartenzahlungen nicht mehr
            auf den Kunden umgelegt werden.
          </p>
        </div>
      </div>
    );
  }

  function stepCapture() {
    return stepWrapper(
      "2. Capture",
      <div className="flex flex-col gap-2">
        <p>
          Im "Capture" Step wird die Transaktion durchgeführt. Das heißt, dass
          der Acquirer (Bank des Verkäufers) das reservierte Geld vom Issuer
          (Bank des Kunden) anfordert.
        </p>
        <p>
          Die Transaktion wird nun durchgeführt und der Verkäufer kann die Ware
          versenden.
        </p>
      </div>
    );
  }

  function stepSettlement() {
    return stepWrapper(
      "3. Settlement",
      <div className="flex flex-col gap-2">
        <p>
          Das zurückgehaltene Geld wird vom Issuer (Bank des Kunden) an das
          Konto des Verkäufers transferiert.
        </p>
        <p>
          Die Transaktion ist nun abgeschlossen und der Verkäufer hat das Geld
          erhalten.
        </p>
        <p>
          Diese Transaktion wird als "Settlement" bezeichnet und meist innerhalb
          von 2-3 Tagen durchgeführt.
        </p>
      </div>,
      true
    );
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-evenly p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-base-100 text-left shadow-xl transition-all w-1/3">
            <div className="bg-base-100 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <span
                className="absolute p-4 right-0 top-0 cursor-pointer"
                onClick={() => cancel()}
              >
                &#x2715;
              </span>
              {ALL_DEMOS[activeStep]}
            </div>
          </div>
          <div className="relative transform overflow-hidden rounded-lg bg-primary-content text-left shadow-xl transition-all w-1/2">
            <div className="bg-primary-content px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {ALL_STEPS[activeStep]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
