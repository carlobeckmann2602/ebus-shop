import { ReactNode, useState } from "react";
import AmexIcon from "../../../assets/images/payments/amex.png";
import MastercardIcon from "../../../assets/images/payments/mastercard.png";
import MaestroIcon from "../../../assets/images/payments/mastero.png";
import VisaIcon from "../../../assets/images/payments/visa.png";

import CreditCardPlayerIcon from "../../../assets/images/demoModals/credit-card/credit-card-player.png";
import CreditCardScaIcon from "../../../assets/images/demoModals/credit-card/credit-card-sca.webp";

import PaymentIcon from "../PaymentIcon";
import CreditCardPaymentForm from "../CreditCardPaymentForm";
import CreditCardStep1Image from "../../../assets/images/demoModals/credit-card/credit-card-step-1.png";
import CreditardAuthorizationImage from "../../../assets/images/demoModals/credit-card/credit-card-authorization.png";
import SecureVisaAndMastercardImage from "../../../assets/images/demoModals/credit-card/3d-secure-visa-mastercard.png";
import VerifiedByVisaImage from "../../../assets/images/demoModals/credit-card/verified-by-visa.svg";
import TouchId from "../../../assets/images/demoModals/apple-pay/touch-id.png";
import Marker from "../../Marker";

function renderWarning(content: ReactNode) {
  return (
    <div className="bg-base-300 flex gap-4 p-4 rounded-lg border-l-warning border-l-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div>{content}</div>
    </div>
  );
}

function renderInfo(content: ReactNode) {
  return (
    <div className="bg-base-300 flex items-center gap-4 p-4 rounded-lg border-l-info border-l-8">
      <svg
        height="48"
        viewBox="0 0 48 48"
        width="48"
        className="w-6  h-6 stroke-current shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
      </svg>
      <div>{content}</div>
    </div>
  );
}

const PRICE = 500;

function renderKonto(
  day: string,
  isProcessing: boolean,
  isIncoming: boolean,
  otherName: string,
  balance: number
) {
  return (
    <div className="flex flex-col gap-6 justify-center w-full mt-2">
      <div className="text-2xl text-black dark:text-white">
        Konto des {isIncoming ? "Verkäufers" : "Käufers"}:
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-between w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-md">
          <p>Kontostand</p>
          <p className="text-white text-xl font-bold">
            {isProcessing ? balance : balance + PRICE * (isIncoming ? 1 : -1)}
            ,00 €
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center w-full">
          <p className="text-black dark:text-white text-sm">{day}</p>
          <div className="flex flex-row justify-between w-full bg-gray-800 px-4 py-2 rounded-md">
            <div>
              <p className="text-white">{otherName}</p>
              {isProcessing ? (
                <p className={`text-sm text-yellow-400`}>
                  <div className="flex flex-row gap-1">Vorgemerkt</div>
                </p>
              ) : (
                <p className="text-gray-400 text-sm">
                  {new Date().toLocaleString("DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}{" "}
                  - {isIncoming ? "Eingehend" : "Ausgehend"}
                </p>
              )}
            </div>
            <p
              className={`text-black h-min rounded-md px-2 ${
                isIncoming ? "bg-green-500 text-white" : "bg-red-500 text-white"
              } ${isProcessing ? "opacity-40" : ""}`}
            >
              {isIncoming ? "+" : "-"}
              {PRICE},00 €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    step3DSecure(),
    stepClearing(),
    stepSettlement(),
  ];

  const ALL_DEMOS = [
    demoOne(),
    demoDataBetweenCostumerAndMerchant(),
    demoOne(),
    demoOne(),
    demoOne(),
    demo3DSecure(false),
    demo3DSecure(true),
    demoClearing(),
    demoSettlement(),
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
          Bei einer Zahlung mit Kreditkarte gibt es <Marker>4 Parteien</Marker>,
          die miteinander kommunizieren:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <Marker>Customer</Marker> (Kunde)
          </li>
          <li>
            <Marker>Merchant</Marker> (Verkäufer)
          </li>
          <li>
            <Marker>Acquirer</Marker> (Bank des Verkäufers)
          </li>
          <li>
            <Marker>Issuer</Marker> (Bank des Kunden)
          </li>
        </ul>
        <p>
          Zusätzlich gibt es noch das <Marker>Paymentgateway</Marker> (z.B.
          “authorize.net” von Visa), welches als Vermittler zwischen den
          Parteien fungiert.
        </p>
        <a href={CreditCardPlayerIcon} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={CreditCardPlayerIcon}
            alt="Credit Card Player"
          />
        </a>
      </div>
    );
  }

  function stepDataBetweenCostumerAndMerchant() {
    return stepWrapper(
      "Eingabe der Kreditkarteninformationen",
      <div className="flex flex-col gap-2">
        <p>
          Der <Marker>Kunde</Marker> (Customer) gibt seine{" "}
          <Marker>Kreditkarteninformationen</Marker> auf der Website des{" "}
          <Marker>Verkäufers</Marker> (Merchant) ein. Sobald der Kunde auf
          “Bezahlen” klickt, sendet der Verkäufer die Kreditkarteninformationen
          an den <Marker>Acquirer</Marker> (Bank des Verkäufers).
        </p>
        <img src={CreditCardStep1Image} alt="Credit Card Step 1" />
      </div>
    );
  }

  function demoDataBetweenCostumerAndMerchant() {
    return demoWrapper(
      <div className="flex flex-col gap-6 justify-center">
        <CreditCardPaymentForm />
        <button className="btn btn-primary" onClick={() => nextPage()}>
          Bezahlen
        </button>
      </div>
    );
  }

  function stepAuthorization() {
    return stepWrapper(
      "1. Authorization",
      <div className="flex flex-col gap-2">
        <p>
          Die Bank des Verkäufers (Acquirer) empfängt von diesem die{" "}
          <Marker>Transaktions- und Bezahlinformationen</Marker> des Kunden.
          Diese Daten werden über das Gateway an die Bank des Kunden, den{" "}
          <Marker>Issuer</Marker>, weitergeleitet.
        </p>
        <p>
          Der Issuer prüft zunächst die Verfügbarkeit ausreichender{" "}
          <Marker>Guthaben</Marker> auf der Kreditkarte des Kunden, um die
          Produkte zu bezahlen. Falls ausreichend Guthaben vorhanden ist,
          erfolgt eine <Marker>Reservierung des Betrags</Marker> auf der
          Kreditkarte bis zur abschließenden Durchführung der Transaktion.
        </p>
        <p>
          Im nächsten Schritt erfolgt die Überprüfung der Kartenlegitimität
          mithilfe von <Marker>3D Secure</Marker>, um sicherzustellen, dass der
          Karteninhaber tatsächlich legitim ist (weitere Informationen siehe
          Abschnitte "3D Secure" und "PSD2").
        </p>
        <img
          src={CreditardAuthorizationImage}
          className="rounded-md"
          alt="Credit Card Authorization"
        />
      </div>
    );
  }

  function step3DSecure() {
    return stepWrapper(
      "1. Authorization: 3D Secure",
      <div className="flex flex-col gap-2">
        <p>
          Das <Marker>Gateway</Marker> fordert im “
          <Marker>Authorization</Marker>” Step eine{" "}
          <Marker>Risikobewertung</Marker> des <Marker>Issuers</Marker> (Bank
          des Customers) an.
        </p>
        <p>
          Der Issuer bewertet anhand von Faktoren wie Transaktionsvolumen, IP
          Adresse, Gerät, etc. ob es sich um eine{" "}
          <Marker>betrügerische Transaktion</Marker> handeln könnte.
        </p>
        <ul className="list-disc ml-6">
          <li>
            Wird die Transaktion als “kein Betrug” oder als “möglicherweise
            Betrug” gewertet, wird der Kunde aufgefordert sich zu{" "}
            <Marker>verifizieren</Marker>.
          </li>
          <li>
            Wird die Transaktion als “Betrug” gewertet, wird die Transaktion{" "}
            <Marker>abgelehnt</Marker>.
          </li>
        </ul>
        <h1 className="font-bold">3D Secure Verifizierung: </h1>
        <p>
          Falls der Kunde aufgefordert wird sich zu verifizieren, wird dieser
          auf eine <Marker>Seite des Issuers</Marker> weitergeleitet.
        </p>
        <p>
          Dort wird der Kunde aufgefordert sich per <Marker>3D Secure</Marker>{" "}
          zu verifizieren. Diese Verifizierung kann z.B. per SMS-Tan oder
          Fingerabdruck in der Banking App erfolgen (siehe "3D Secure" und
          "PSD2").
        </p>
        <br />
        {renderInfo(
          <p>
            Das <Marker>Guthaben</Marker> wird nach erfolgreicher 3D Secure
            Verifizierung auf der Kreditkarte <Marker>reserviert</Marker>.
          </p>
        )}
      </div>
    );
  }

  function demo3DSecure(showFingerabdruck: boolean) {
    return demoWrapper(
      <div className="flex flex-col gap-6 justify-center border rounded-md p-4">
        <h1 className="w-full text-xl font-bold">Banking App von Kim Käufer</h1>
        <div className="flex flex-row justify-between items-end rounded-md p-4 shadow-md">
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col">
              <p className="text-sm">Betrag</p>
              <p className="font-bold text-xl">{PRICE},00 €</p>
            </div>
            <div>
              <p className="text-sm">Kartennummer</p>
              <p>**** **** **** 1234</p>
            </div>
          </div>
          <img
            src={VerifiedByVisaImage}
            className="rounded-md w-14"
            alt="Verified By Visa"
          />
        </div>
        <div>
          <p>Händler:</p>
          <p className="font-bold">E-Bus Shop</p>
        </div>
        <div>
          <p>Datum - Uhrzeit</p>
          <p className="font-bold">
            {new Date().toLocaleString("DE", {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>

        {!showFingerabdruck ? (
          <>
            <p className="text-sm font-light">
              Bitte bestätigen Sie die Kreditkartenzahlung
            </p>
            <div className="flex flex-col gap-2">
              <button className="btn btn-primary" onClick={() => nextPage()}>
                Bestätigen
              </button>
              <button className="btn">Abbrechen</button>
            </div>
          </>
        ) : (
          <div className=" bg-primary gap-8 text-white   rounded-t-md flex flex-col justify-center   items-center p-4">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-xl">Biometrie für "Banking"</p>
              <p className="text-center">
                Bitte bestätigen Sie die Zahlung mit Ihrem Fingerabdruck.
              </p>
            </div>
            <span onClick={() => nextPage()} className="cursor-pointer">
              <img
                className="h-10 w-10 object-contain"
                src={TouchId}
                alt="Touch ID Icon"
              />
            </span>
            <p className="text-sm font-light">
              Berühre den Fingerabdrucksensor
            </p>
          </div>
        )}
      </div>
    );
  }

  function stepEinschub3DSecure() {
    return stepWrapper(
      "Einschub: 3D Secure",
      <div className="flex flex-col gap-2">
        <p>
          <Marker>3D Secure</Marker> ist ein Verfahren zur Authentifizierung von
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
          3D Secure fügt einen{" "}
          <Marker>zusätzlichen Verifizierungsschritt</Marker> beim Bezahlen mit
          Kreditkarte hinzu. Der Karteninhaber identifiziert sich über seine
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
          3D Secure wird unteranderem von der{" "}
          <Marker>PSD2 EU-Richtlinie</Marker> verpflichtend gemacht (siehe
          "PSD2").
        </p>
        <img
          src={SecureVisaAndMastercardImage}
          className="bg-white rounded-md w-1/4 mx-auto"
          alt="3D-Secure Visa And Mastercard"
        />
      </div>
    );
  }

  function stepEinschubPSD2() {
    return stepWrapper(
      "Einschub: PSD2",
      <div className="flex flex-col gap-4">
        <p>
          Die <Marker>Payment Services Directive 2</Marker> (
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
              Erhöhung der <Marker>Sicherheit</Marker> von elektronischen
              Zahlungen und des Datenschutzes
            </li>
            <li>
              Förderung des <Marker>Wettbewerbs</Marker> durch die Öffnung des
              Marktes für neue Zahlungsdienstleister
            </li>
            <li>
              Erhöhung der <Marker>Verbraucherrechte</Marker>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold">Starke Kundenauthentifizierung (SCA):</h1>
          <p>
            Durch die PSD2 wird die{" "}
            <Marker>starke Kundenauthentifizierung</Marker> (SCA){" "}
            <Marker>verpflichtend</Marker>. Das heißt, dass die
            Kreditkartenunternehmen Visa und Mastercard die 3D Secure
            Verifizierung für alle Zahlungen verpflichtend machen.
          </p>
          <p>
            Um eine starke Kundenauthentifizierung zu gewährleisten, muss sich
            der Kunde bei einer Zahlung mit{" "}
            <Marker>zwei der folgenden drei Faktoren authentifizieren</Marker>:
          </p>
          <a href={CreditCardScaIcon} target="_blank">
            <img
              className="m-2 bg-white rounded-md"
              src={CreditCardScaIcon}
              alt="Credit Card SCA"
            />
          </a>
        </div>

        <div>
          <h1 className="font-bold">
            Kontoschnittstellen für Zahlungsdrittanbieter:
          </h1>
          <p>
            Die PSD2 verpflichtet Banken dazu,{" "}
            <Marker>Kontoschnittstellen</Marker> für Zahlungsdrittanbieter
            bereitzustellen. Das heißt, dass Banken Schnittstellen für
            Drittanbieter wie z.B. Paypal, Klarna, etc. bereitstellen müssen.
          </p>
        </div>

        <div>
          <h1 className="font-bold">Gebühren für Kreditkartenzahlungen:</h1>
          <p>
            Durch die PSD2 dürfen <Marker>Gebühren</Marker> für
            Kreditkartenzahlungen nicht mehr auf den Kunden umgelegt werden.
          </p>
        </div>
      </div>
    );
  }

  function stepClearing() {
    return stepWrapper(
      "2. Clearing",
      <div className="flex flex-col gap-2">
        <p>
          Im "<Marker>Clearing</Marker>"-Prozess erfolgt der{" "}
          <Marker>Austausch</Marker> präziser{" "}
          <Marker>Transaktionsinformationen</Marker> zwischen dem{" "}
          <Marker>Acquirer</Marker> (der Bank des Verkäufers) und dem{" "}
          <Marker>Issuer</Marker> (der Bank des Käufers).
        </p>
        <p>
          Wenn Mastercard als Gateway fungiert, übernimmt das sogenannte Global
          Clearing Management System (GCMS) von Mastercard die Erfassung dieser
          Informationen. Das System verarbeitet die Daten, berechnet die
          entsprechenden Gebühren und leitet sie an den jeweiligen Empfänger
          weiter.
        </p>
        {renderWarning(
          <p>
            Wichtig zu beachten ist, dass in diesem Stadium des Prozesses
            lediglich <Marker>Informationen ausgetauscht</Marker> werden. Die
            eigentlichen Geldtransaktionen finden erst im nachfolgenden
            "Settlement"-Schritt statt.
          </p>
        )}
      </div>
    );
  }

  function stepSettlement() {
    return stepWrapper(
      "3. Settlement",
      <div className="flex flex-col gap-2">
        <p>
          Das <Marker>zurückgehaltene Geld</Marker> wird vom{" "}
          <Marker>Issuer</Marker> (Bank des Kunden) an das{" "}
          <Marker>Verkäufer</Marker> Konto <Marker>transferiert</Marker>.
        </p>
        <p>
          Die Transaktion ist nun <Marker>abgeschlossen</Marker> und der
          Verkäufer hat das Geld erhalten.
        </p>
        <p>
          Diese Transaktion wird als "Settlement" bezeichnet und meist innerhalb
          von <Marker>2-3 Tagen</Marker> durchgeführt.
        </p>
      </div>,
      true
    );
  }
  function demoClearing() {
    return demoWrapper(
      <div className="w-full flex flex-col gap-2">
        {renderKonto("Anstehende Umsätze", true, true, "Kim Käufer", 0)}
        <div className="flex-grow border-t mt-4 border-gray-400"></div>
        {renderKonto("Anstehende Umsätze", true, false, "E-Bus Shop", 1300)}
      </div>
    );
  }

  function demoSettlement() {
    return demoWrapper(
      <div className="w-full flex flex-col gap-2">
        {renderKonto("Heute", false, true, "Kim Käufer", 0)}
        <div className="flex-grow border-t mt-4 border-gray-400"></div>
        {renderKonto("Heute", false, false, "E-Bus Shop", 1300)}
      </div>
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
