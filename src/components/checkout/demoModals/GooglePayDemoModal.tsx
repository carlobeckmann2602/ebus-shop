import { useState } from "react";
import GooglePayIcon from "../../../assets/images/payments/google-pay.png";

type GooglePayDemoModalProps = {
  setShowGooglePayDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function GooglePayDemoModal(props: GooglePayDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [stepOne(), stepTwo(), stepThree()];

  const ALL_DEMOS = [demoOne(), demoTwo(), demoThree()];

  function cancel() {
    props.setShowGooglePayDemoModal(false);
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
            src={GooglePayIcon}
            alt="Google Pay Icon"
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
          Kreditkarte für Google Pay hinterlegen
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
      <div className="flex flex-col items-center min-h-[16rem] gap-6">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={GooglePayIcon}
            alt="Google Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col grow gap-2">
          Zahlungsmethode:
          <select className="select select-primary select-bordered select-lg w-full">
            <option selected>Comdirect Visa</option>
            <option>DKB Mastercard</option>
            <option>American Express</option>
          </select>
          Lieferadresse:
          <select className="select select-primary select-bordered select-lg w-full">
            <option selected>
              Max Mustermann, Musterstraße 4, Musterstadt
            </option>
            <option>Neu anlegen</option>
          </select>
          Versandart:
          <select className="select select-primary select-bordered select-lg w-full">
            <option selected>Standrad Versand (3-4 Werktage)</option>
            <option>Express Versand (innerhalb 1 Werktag)</option>
          </select>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <span onClick={() => nextPage()} className="btn btn-primary">
            Bezahlen
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
          Google Pay-Tansaktionsdialog
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
      <div className="flex flex-col items-center min-h-[16rem]">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center align-middle rounded-full bg-white border-2 border-primary sm:mx-0 sm:h-10 sm:w-20">
          <img
            className="h-full w-full object-contain"
            src={GooglePayIcon}
            alt="Google Pay Icon"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full flex flex-col grow items-center justify-center gap-16">
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
