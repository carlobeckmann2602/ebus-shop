import { useState } from "react";
import ApplePayIcon from "../../../assets/images/payments/apple-pay.png";
import TouchId from "../../../assets/images/demoModals/apple-pay/touch-id.png";
import TouchIdCheck from "../../../assets/images/demoModals/apple-pay/touch-id-check.png";
import applepayOne from "../../../assets/images/demoModals/apple-pay/apple_pay-1.png";
import applepayTwo from "../../../assets/images/demoModals/apple-pay/apple_pay-2.png";
import applepayThree from "../../../assets/images/demoModals/apple-pay/apple_pay-3.png";

type ApplePayDemoModalProps = {
  setShowApplePayDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function ApplePayDemoModal(props: ApplePayDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [stepOne(), stepTwo(), stepThree(), stepFour(), stepFive()];

  const ALL_DEMOS = [demoOne(), demoTwo(), demoThree(), demoFour(), demoFive()];

  function cancel() {
    props.setShowApplePayDemoModal(false);
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
          Authentifizierung des Shops und sichere Verbindung (Einschub zur
          Erklärung)
        </h3>
        <p>
          Um Apple Pay im Internet nutzen zu können, müssen einige
          Voraussetzungen erfüllt sein. Zunächst müssen alle Websites, die Apple
          Pay akzeptieren, bei Apple registriert sein. Damit wird
          sichergestellt, dass Transaktionen sicher und korrekt durchgeführt
          werden können.
        </p>
        <p>
          Außerdem muss Apple ein TLS-Client-Zertifikat ausstellen. Dieses
          Zertifikat ist ein wichtiger Teil der Sicherheitsinfrastruktur von
          Apple Pay. Es stellt sicher, dass die Kommunikation zwischen ihrem
          Gerät und den Apple-Servern sicher ist und dass ihre
          Zahlungsinformationen während der Transaktion geschützt sind.
        </p>
        <p>
          Schließlich müssen alle Inhalte über HTTPS übertragen werden. HTTPS
          ist ein sicheres Kommunikationsprotokoll, das sicherstellt, dass die
          Daten, die zwischen ihrem Gerät und der Website ausgetauscht werden,
          verschlüsselt und somit vor potenziellen Hackern geschützt sind.
        </p>
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
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col grow items-center justify-center gap-16">
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
          Kreditkarte für Apple Pay hinterlegen
        </h3>
        <p>
          Wenn sie eine Karte zu Apple Pay hinzufügen, werden die Kartendaten
          verschlüsselt an Apple gesendet. Apple entschlüsselt die Daten,
          bestimmt das Zahlungsnetzwerk ihrer Karte und verschlüsselt die Daten
          erneut. Diese verschlüsselten Daten können nur von ihrem
          Zahlungsnetzwerk entschlüsselt werden.
        </p>
        <p>
          Apple kann bestimmte Informationen und Daten über die Nutzung ihres
          Geräts verwenden, um zu prüfen, ob sie für Apple Pay qualifiziert
          sind. Apple kann auch Daten an ihren Kartenaussteller oder ihr
          Zahlungsnetzwerk senden, um zu überprüfen, ob ihre Karte für Apple Pay
          geeignet ist.
        </p>
        <p>
          Nachdem ihre Karte genehmigt wurde, erstellt ihre Bank oder ihr
          Kartenaussteller eine gerätespezifische Nummer, verschlüsselt sie und
          sendet sie an Apple. Diese Nummer wird sicher auf ihrem Gerät
          gespeichert und kann von Apple nicht entschlüsselt werden.
        </p>
        <a href={applepayOne} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={applepayOne}
            alt="Grafik die zeigt, eine Kreditkarte in Apple Pay angelegt wird."
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
            Apple speichert die ursprünglichen Kartennummern nicht und hat auch
            keinen Zugriff darauf.
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

  function demoTwo() {
    return (
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col grow items-center justify-center gap-8 py-4">
          <select className="select select-primary select-bordered select-lg w-full">
            <option selected>Comdirect Visa</option>
            <option>DKB Mastercard</option>
            <option>American Express</option>
          </select>
          <span className="loading loading-spinner text-primary scale-150 grow"></span>
        </div>
      </div>
    );
  }

  function stepThree() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Apple Pay-Tansaktionsdialog
        </h3>
        <p>
          Das Betriebssystem wird aufgefordert, den Apple Pay-Transaktionsdialog
          anzuzeigen, um Informationen für die Website abzufragen, z. B. welche
          Karte verwendet werden soll.
        </p>
        <p>
          Zu diesem Zeitpunkt erhält die Website die Adressdaten, um die
          Versandkosten berechnen zu können. Erst wenn der Nutzer die Zahlung
          per Face ID, Touch ID oder Code bestätigt, erhält die Website alle
          Informationen. Erst nach erfolgter Autorisierung werden die
          Informationen der Apple Pay Transaktion an den Händler übermittelt.
        </p>
        <h4 className="text-md font-medium leading-4 text-primary">
          Autoriserung mit exterem Apple Gerät
        </h4>
        <p>
          Apple Pay verwendet einen Prozess namens “Handoff”, um Zahlungen
          zwischen ihrem Mac und ihrem iPhone oder ihrer Apple Watch zu
          autorisieren. Dabei werden verschlüsselte Informationen ausgetauscht,
          die nur von ihrem Zahlungsnetzwerk entschlüsselt werden können. Nach
          der Autorisierung wird ein verschlüsselter “Zahlungs-Token” an ihren
          Mac gesendet und dann dem Händler zur Verfügung gestellt. Dieser
          Prozess kann nur stattfinden, wenn sich die Geräte in unmittelbarer
          Nähe zueinander befinden.
        </p>
        <a href={applepayTwo} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={applepayTwo}
            alt="Grafik die den Handoff zwischen Apple Geräten zeigt."
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

  function demoThree() {
    return (
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col items-center justify-center gap-4 py-4">
          <select className="select select-bordered select-lg w-full">
            <option selected>Comdirect Visa</option>
            <option>DKB Mastercard</option>
            <option>American Express</option>
          </select>
          <div className="w-full">
            <p>E-Bus Shop bezahlen</p>
            <span className="text-2xl font-bold">{props.totalCartValue}</span>
          </div>
          <span onClick={() => nextPage()} className="cursor-pointer">
            <img
              className="h-10 w-10 object-contain"
              src={TouchId}
              alt="Touch ID Icon"
            />
          </span>
        </div>
      </div>
    );
  }

  function stepFour() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Autorisierung der Transaktion & Übermittlung der Transaktionsdaten
        </h3>
        <ol className="list-decimal pl-6">
          <li>
            <b>Verschlüsselte Transaktion empfangen:</b> Wenn sie eine Zahlung
            mit Apple Pay durchführst, sendet ihr Gerät eine verschlüsselte
            Version der Transaktionsdaten an Apple Pay. Die Daten zur
            Transaktion werden dabei mit einem Nonce, welches vorher von dem
            Apple Pay-Server erhalten wird, im Secure-Element verschlüsselt.
          </li>
          <li>
            <b>Wiederverschlüsselung mit dem Schlüssel des Entwicklers:</b>{" "}
            Apple Pay entschlüsselt und verschlüsselt diese Daten wieder mit
            einem speziellen Schlüssel, den nur der Entwickler der Website
            kennt. Damit ist sichergestellt, dass nur der Entwickler die Daten
            entschlüsseln und lesen kann.
          </li>
          <li>
            <b>Senden der Transaktionsdaten:</b> Die doppelt verschlüsselten
            Transaktionsdaten werden dann an den Entwickler der Website oder an
            den Zahlungsabwickler gesendet.
          </li>
          <div className="bg-base-300 flex gap-4 p-4 rounded-lg border-l-warning border-l-8 mt-4 mb-2">
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
              Es ist wichtig zu beachten, dass die Domain, an die die Daten
              gesendet werden, immer verifiziert werden muss, um
              sicherzustellen, dass die Daten den richtigen Empfänger erreichen.
            </span>
          </div>
          <li>
            <b>
              Übertragung der Geräte-Accountnummer (DAN) und des
              Sicherheitscodes:
            </b>{" "}
            Zusammen mit den Transaktionsdaten sendet Apple Pay auch ihre
            Geräte-Accountnummer (DAN) und einen transaktionsspezifischen,
            dynamischen Sicherheitscode an die Website.
          </li>
          <div className="bg-base-300 flex gap-4 p-4 rounded-lg border-l-warning border-l-8 mt-4 mb-2">
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
              Weder Apple noch ihr Gerät senden die tatsächliche Nummer ihrer
              Zahlungskarte an die Website. Dadurch wird sichergestellt, dass
              ihre Kartendaten sicher bleiben.
            </span>
          </div>
        </ol>
        <a href={applepayThree} target="_blank">
          <img
            className="p-2 bg-white rounded-md"
            src={applepayThree}
            alt="Grafik die den Handoff zwischen Apple Geräten zeigt."
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

  function demoFour() {
    return (
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col items-center justify-center gap-4 py-4">
          <select className="select select-bordered select-lg w-full" disabled>
            <option selected>Comdirect Visa</option>
            <option>DKB Mastercard</option>
            <option>American Express</option>
          </select>
          <div className="w-full">
            <p>E-Bus Shop bezahlen</p>
            <span className="text-2xl font-bold">{props.totalCartValue}</span>
          </div>
          <span onClick={() => nextPage()} className="cursor-pointer">
            <span className="loading loading-spinner text-red-500 scale-150"></span>
          </span>
        </div>
      </div>
    );
  }

  function stepFive() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Transaktion beim Zahlungsnetzwerk durchführen
        </h3>
        <p>
          Mit den erhaltenen Transaktionsdaten und der Geräte-Accountnummer
          (DAN) kann der Website-Betreiber nun die Transaktion bei seinem
          Zahlungsnetzwerk autorisieren und, falls autorisiert, ausführen
          lassen. Sobald dies geschehen ist, ist die Transaktion erfolgreich
          abgeschlossen und der Kauf mit Apple Pay damit beendet.
        </p>
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

  function demoFive() {
    return (
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col items-center justify-center gap-4 py-4">
          <select className="select select-bordered select-lg w-full" disabled>
            <option selected>Comdirect Visa</option>
            <option>DKB Mastercard</option>
            <option>American Express</option>
          </select>
          <div className="w-full">
            <p>E-Bus Shop bezahlen</p>
            <span className="text-2xl font-bold">{props.totalCartValue}</span>
          </div>
          <img
            className="h-10 w-10 object-contain"
            src={TouchIdCheck}
            alt="Touch ID Check Icon"
          />
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
