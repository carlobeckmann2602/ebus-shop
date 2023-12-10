import { ReactNode } from "react";

type ModalProps = {
  id: string;
  content: ReactNode;
};

export default function Modal({ id, content }: ModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-1/2 max-w-5xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              window.sessionStorage.setItem("startModal", "false");
            }}
          >
            ✕
          </button>
        </form>
        {content}
      </div>
    </dialog>
  );
}
