import { useState } from "react";

type PaypalDemoModalProps = {
  setShowPaypalDemoModal: (visibility: boolean) => void;
  afterModal: () => void;
};

export default function PaypalDemoModal(props: PaypalDemoModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const ALL_STEPS = [stepOne(), stepTwo()];

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
      <div className="flex flex-col">
        <div className="h-16 w-16 items-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <img src="/src/assets/images/payments/paypal.png" alt="Paypal Icon" />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            Paypal
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
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
  function stepTwo() {
    return (
      <div className="flex flex-col">
        <div className="h-16 w-16 items-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <img src="src/assets/images/payments/paypal.png" alt="Paypal Icon" />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            Hintergrund Prozess
          </h3>
          <div className="mt-2">
            <p>Hier folgen grafiken und texte</p>
          </div>
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

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <span
                className="absolute p-4 right-0 top-0 cursor-pointer"
                onClick={() => cancel()}
              >
                &#x2715;
              </span>
              {ALL_STEPS[activeStep]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
