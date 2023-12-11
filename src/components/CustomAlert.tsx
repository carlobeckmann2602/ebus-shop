import { useState } from "react";

export type Alert = {
  text: string;
  type: "alert-error" | "alert-info" | "alert-success";
  id: string;
};

type AlertProps = Alert;
export default function CustomAlert(props: AlertProps) {
  const [displayMode, setDisplayMode] = useState<"block" | "none">("block");

  return (
    <div
      id={props.id}
      className={`alert ${props.type}`}
      style={{ display: displayMode }}
    >
      <span>{props.text}</span>
      <span
        onClick={() => setDisplayMode("none")}
        className="cursor-pointer ml-8"
      >
        &#x2715;
      </span>
    </div>
  );
}
