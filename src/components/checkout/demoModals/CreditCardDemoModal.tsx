import { ReactNode, useState } from "react";
import AmexIcon from "../../../assets/images/payments/amex.png";
import MastercardIcon from "../../../assets/images/payments/mastercard.png";
import MaestroIcon from "../../../assets/images/payments/mastero.png";
import VisaIcon from "../../../assets/images/payments/visa.png";
import PaymentIcon from "../PaymentIcon";

type CreditCardDemoModalProps = {
  setShowDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
  totalCartValue: string;
};

export default function CreditCardDemoModal(props: CreditCardDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [stepOne()];

  const ALL_DEMOS = [demoOne()];

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

  function stepOne() {
    return (
      <div className="flex flex-col items-center gap-6">
        <h3
          className="text-lg font-semibold leading-6 text-primary"
          id="modal-title"
        >
          Authentifizierung des Shops (Einschub zur Erklärung)
        </h3>
        <p>lorem ipsum</p>
        <div className="flex flex-row gap-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              nextPage();
            }}
          >
            Weiter
          </button>
          <button className="btn btn-primary" onClick={() => previousPage()}>
            Zurück
          </button>
        </div>
      </div>
    );
  }

  function demoWrapper(content: ReactNode) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-32 px-4 py-1 items-center justify-center flex gap-2">
          <PaymentIcon url={AmexIcon} backgroundColor={"#0078D2"} />
          <PaymentIcon url={VisaIcon} />
          <PaymentIcon url={MastercardIcon} />
          <PaymentIcon url={MaestroIcon} />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full h-48 flex flex-col items-center justify-center gap-16">
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
