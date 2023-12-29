import { useState } from "react";
import ApplePayIcon from "../../../assets/images/payments/apple-pay.png";
import TouchId from "../../../assets/images/demoModals/apple-pay/touch-id.png";
import TouchIdCheck from "../../../assets/images/demoModals/apple-pay/touch-id-check.png";

type ApplePayDemoModalProps = {
  setShowApplePayDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function ApplePayDemoModal(props: ApplePayDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [stepOne(), stepTwo(), stepThree()];

  const ALL_DEMOS = [demoOne(), demoTwo(), demoThree()];

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
          Apple Pay. Es stellt sicher, dass die Kommunikation zwischen deinem
          Gerät und den Apple-Servern sicher ist und dass deine
          Zahlungsinformationen während der Transaktion geschützt sind.
        </p>
        <p>
          Schließlich müssen alle Inhalte über HTTPS übertragen werden. HTTPS
          ist ein sicheres Kommunikationsprotokoll, das sicherstellt, dass die
          Daten, die zwischen deinem Gerät und der Website ausgetauscht werden,
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
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
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
          Step Two
        </h3>

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
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col items-center justify-center gap-4 py-4">
          <select className="select select-bordered select-lg w-full">
            <option disabled selected>
              Comdirect Visa
            </option>
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

  function stepThree() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Step Three
        </h3>

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

  function demoThree() {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={ApplePayIcon}
            alt="Apple Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col items-center justify-center gap-4 py-4">
          <select className="select select-bordered select-lg w-full">
            <option disabled selected>
              Comdirect Visa
            </option>
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
