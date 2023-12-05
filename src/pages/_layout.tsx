import Header from "../components/Header.tsx";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <div className="content">{props.children}</div>
    </>
  );
}
