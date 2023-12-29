import { useState } from "react";
import shoppingCartIcon from "../../../assets/icons/shopping_cart.png";
import paypalIcon from "../../../assets/images/payments/paypal.png";
import paypalOne from "../../../assets/images/demoModals/paypal/paypal-1.png";
import paypalTwo from "../../../assets/images/demoModals/paypal/paypal-2.png";
import paypalThree from "../../../assets/images/demoModals/paypal/paypal-3.png";
import paypalFour from "../../../assets/images/demoModals/paypal/paypal-4.png";
import paypalFive from "../../../assets/images/demoModals/paypal/paypal-5.png";
import paypalSix from "../../../assets/images/demoModals/paypal/paypal-6.png";
import paypalSeven from "../../../assets/images/demoModals/paypal/paypal-7.png";
import paypalEight from "../../../assets/images/demoModals/paypal/paypal-8.png";
import paypalNine from "../../../assets/images/demoModals/paypal/paypal-9.png";
import paypalTen from "../../../assets/images/demoModals/paypal/paypal-10.png";
import { ShoppingCart } from "lucide-react";

type PaypalDemoModalProps = {
  setShowPaypalDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function PaypalDemoModal(props: PaypalDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [
    stepOne(),
    stepTwo(),
    stepThree(),
    stepFour(),
    stepFive(),
    stepSix(),
  ];

  const ALL_DEMOS = [
    demoOne(),
    demoTwo(),
    demoThree(),
    demoFour(),
    demoFive(),
    demoSix(),
  ];

  function cancel() {
    props.setShowPaypalDemoModal(false);
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

  function finishModal() {
    props.afterModal();
  }

  function stepOne() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Authentifizierung des Shops (Einschub zur Erklärung)
        </h3>
        <p>
          Bevor ein Shop ein die Bezahlung über PayPal akzeptieren kann, muss er
          als Geschäftskonto bei PayPal registriert werden. Führt man eine
          solche Registrierung durch, wird für jeden Shop eine sogenannte Client
          ID und ein Client Secret erstellt. Die beiden Daten liegen sicher
          geschützt im Backend des Servers. Dort sind Sie unerreichbar für
          normale Nutzende des Shops.
        </p>
        <a href={paypalOne} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalOne}
            alt="Grafik die zeigt, wie Client ID und Secret über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <p>
          Ist der Online Shop bei PayPal registriert wird ein Sicherheits-Token
          übergeben, der sogenannte Access-Token. Dieser ist jeweils nur für den
          einen Shop gültig und muss fortan bei jedem Aufruf der Orders API
          mitgesendet werden.
        </p>
        <a href={paypalTwo} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalTwo}
            alt="Grafik die zeigt, wie Client ID und Secret über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <div className="bg-base-300 flex gap-4 p-4 rounded-lg border-l-error border-l-8">
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
          <span>
            Angreifer könnten an dieser Stelle versuchen den Access-Token
            abzugreifen, um mithilfe des Tokens einen online Shop zu
            kompromittieren. Es ist daher ratsam für Shop Betreiber, den
            Access-Token regelmäßig zu erneuern. Ebenso sollten die Client ID
            und das Client Secret gesichert werden und nicht durch unberechtigte
            erreichbar sein.
          </span>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => cancel()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => nextPage()} className="btn btn-primary">
            Weiter
          </span>
        </div>
      </div>
    );
  }

  function demoOne() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full h-48 flex flex-col items-center justify-center gap-16">
          <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
      </div>
    );
  }

  function stepTwo() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Kommunikation mit der Orders API (Einschub zur Erklärung)
        </h3>
        <p>
          Über einen HTTP Request wird der zuvor empfangende Access-Token
          zusammen mit den Rahmendaten der Bestellung, die bezahlt werden soll,
          an die PayPal Orders Api weitergereicht.
        </p>
        <a href={paypalThree} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalThree}
            alt="Grafik die zeigt, wie Client ID und Secret über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <p>
          Ist der Online Shop bei PayPal registriert wird ein Sicherheits-Token
          übergeben, der sogenannte Access-Token. Dieser ist jeweils nur für den
          einen Shop gültig und muss fortan bei jedem Aufruf der Orders API
          mitgesendet werden.
        </p>
        <a href={paypalFour} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalFour}
            alt="Grafik die zeigt, wie Client ID und Secret über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => previousPage()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => nextPage()} className="btn btn-primary">
            Weiter
          </span>
        </div>
      </div>
    );
  }

  function demoTwo() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full h-48 flex flex-col items-center justify-center gap-16">
          <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
      </div>
    );
  }

  function stepThree() {
    return (
      <div className="flex flex-col items-center gap-6 ">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Authentifizierung des Nutzers (Einschub zur Erklärung)
        </h3>
        <p>
          Jetzt wird ein Hintergrundprozess angestoßen, in dem die Nutzerdaten
          des Nutzers geprüft werden. Diese werden verschlüsselt über eine HTTPS
          Verbindung gesendet. Moderne Browser prüfen, ob auf einer
          unverschlüsselten Seite befinden und geben gegebenenfalls eine Warnung
          aus.
        </p>
        <a href={paypalFive} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalFive}
            alt="Grafik die zeigt, wie Nutzername und Passwort über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
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
          <span>
            Je nach Implementierung kann die Authentifizierung auch über das
            sogenannte O-Auth Verfahren durchgeführt werden. Dabei findet die
            Kommunikation über zusätzliche Backend Serer statt.
          </span>
        </div>
        <p>
          Sendet der Nutzer korrekte Daten ab, antwortet der PayPal Server und
          sendet einen Session Token mit. Dieser wird lokal im Browser des
          Nutzers gespeichert und ist nur für den einen Bezahlvorgang gültig.
        </p>
        <a href={paypalSix} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalSix}
            alt="Grafik die zeigt, der PayPal Server über HTTPS mit einem Session Token antwortet."
          />
        </a>
        <div className="bg-base-300 flex gap-4 p-4 rounded-lg border-l-error border-l-8">
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
          <span>
            Ein Mögliches Angriffsszenario könnte hierbei ein sogenannter
            Phishing-Angriff sein. Dabei versuchen Angreifer die Anmelde-Maske
            eines Zahlungsanbieters zu fälschen und Sie zur Eingabe Ihrer
            Nutzerdaten zu bewegen. Achten Sie daher immer darauf, dass die
            Daten verschlüsselt (über HTTPS) übertragen werden und sie sich auf
            der korrekten URL befinden. Dabei wird gerne die Ähnlichkeit
            bestimmter Buchstaben ausgenutzt (zum Beispiel auf www.paypal.com
            und nicht auf www.paypai.com)
          </span>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => previousPage()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => nextPage()} className="btn btn-primary">
            Weiter
          </span>
        </div>
      </div>
    );
  }

  function demoThree() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <div className="mt-2">
            <p className="text-base text-center text-gray-500">
              Bitte geben Sie (erfundene) Daten ein.
            </p>
          </div>
          <form className="mt-2 flex flex-col gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Nutzername</span>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Passwort</span>
              </div>
              <input
                type="password"
                placeholder="Passwort"
                className="input input-bordered w-full"
              />
            </label>
            <span onClick={() => nextPage()} className="btn btn-primary">
              Einloggen
            </span>
            <span
              onClick={() => cancel()}
              className="btn btn-outline btn-primary"
            >
              Abbrechen
            </span>
          </form>
        </div>
      </div>
    );
  }

  function stepFour() {
    return (
      <div className="flex flex-col items-center gap-6 ">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Bestätigung der Zahlung (Einschub zur Erklärung)
        </h3>
        <p>
          Der Nutzer hat nun die Möglichkeit die Bezahlung zu prüfen und
          gegebenenfalls noch zu verändern oder gänzlich zu verwerfen.
        </p>
        <p>
          Dem Nutzer steht es dabei offen, ob er eine über PayPal finanzierte
          Zahlung per Raten, per PayPal Guthaben, per Lastschriftverfahren oder
          per hinterlegter Kreditkarte vollziehen möchte.
        </p>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => previousPage()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => nextPage()} className="btn btn-primary">
            Weiter
          </span>
        </div>
      </div>
    );
  }

  function demoFour() {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="flex justify-between w-full">
          <h3 className="text-lg font-semibold leading-6" id="modal-title">
            Bezahlen mit
          </h3>
          <div className="flex">
            <ShoppingCart className="mx-4" />
            <span className="text-xl">{props.totalCartValue}</span>
          </div>
        </div>
        <div className="w-full">
          <h4 className="font-bold">Bezahlen an</h4>
          <div>
            <p>E-Bus Shop</p>
            <p>Fantasie Straße 123</p>
            <p>98765 Fantasie Stadt</p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="w-full">
          <h4 className="font-bold">Bezahlen mit</h4>
          <div className="flex justify-between items-end">
            <div>
              <p>Privates Bankkonto</p>
              <p>Bank of hostile Takeovers</p>
              <p>DE12 **** **** **** 1234</p>
            </div>
            <p className="right link link-primary">Ändern</p>
          </div>
          <div className="divider"></div>
          <div className="w-full flex flex-col gap-4">
            <span onClick={() => nextPage()} className="btn btn-primary w-full">
              Bezahlen
            </span>
            <span
              onClick={() => cancel()}
              className="btn btn-outline btn-primary w-full"
            >
              Abbrechen
            </span>
          </div>
        </div>
      </div>
    );
  }

  function stepFive() {
    return (
      <div className="flex flex-col items-center gap-6 ">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Verarbeitung der Zahlung (Einschub zur Erklärung)
        </h3>
        <p>
          Sobald der Nutzer auf "Jetzt bezahlen" geklickt hat, wird seine
          Bezahlung als Bewilligt betrachtet und an die PayPal Checkout API
          übergeben.
        </p>
        <a href={paypalSeven} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalSeven}
            alt="Grafik die zeigt, wie Nutzername und Passwort über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <p>
          Sobald das Backend die Bewilligung akzeptiert hat, kontaktiert es
          sowohl das Backend des Shops, als auch den Nutzer im Frontend. Auf
          Seiten des Online Shops gilt die Bezahlung somit als durchgeführt und
          es können externe Folgeprozesse, wie Rechnungserstellung oder
          Versandvorbereitung angestoßen werden.
        </p>
        <a href={paypalEight} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalEight}
            alt="Grafik die zeigt, wie Nutzername und Passwort über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
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
          <span>
            Die Bestellung ist noch nicht final abgeschlossen. Sollte einer der
            Schritte auf dem Weg bis hier hin fehlgeschlagen sein, wird die
            gesamte Bestellung und Bewilligung storniert.
          </span>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => previousPage()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => nextPage()} className="btn btn-primary">
            Weiter
          </span>
        </div>
      </div>
    );
  }

  function demoFive() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full h-48 flex flex-col items-center justify-center gap-16">
          <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
      </div>
    );
  }

  function stepSix() {
    return (
      <div className="flex flex-col items-center gap-6 ">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Abschließende Bestätigung (Einschub zur Erklärung)
        </h3>
        <p>
          Um die gesamte Bestellung abschließend zu beenden, muss noch die
          Bestellung als abgeschlossen markiert werden. Dazu wendet sich das
          Backend des Shops an die PayPal Order API.
        </p>
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
          <span>
            Die Bestellung wurde mithilfe der PayPal Order API im ersten Schritt
            geöffnet und bleibt bis jetzt geöffnet.
          </span>
        </div>
        <a href={paypalNine} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalNine}
            alt="Grafik die zeigt, wie Nutzername und Passwort über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <p>
          Sobald die PayPal Systeme den Abschluss der Bestellung entgegen
          genommen und verarbeitet haben, antworten diese mit einer
          Statusmeldung 200.
        </p>
        <a href={paypalTen} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={paypalTen}
            alt="Grafik die zeigt, wie Nutzername und Passwort über HTTPS an den PayPal Auth Service gesendet werden."
          />
        </a>
        <div className="flex flex-row justify-end gap-4">
          <span
            onClick={() => previousPage()}
            className="btn btn-outline btn-primary"
          >
            Zurück
          </span>
          <span onClick={() => finishModal()} className="btn btn-primary">
            Demonstration schließen
          </span>
        </div>
      </div>
    );
  }

  function demoSix() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={paypalIcon}
            alt="Paypal Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full h-48 flex flex-col items-center justify-center gap-16">
          <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
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
