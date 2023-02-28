import React from "react";
import classnames from "classnames";

interface ButtonProps {
  type?: "primary" | "secondary";
}

export default function Button({
  type,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  const base = "py-3 px-6 font-semibold flex items-center space-x-2";
  const primary = "bg-red-700 text-white rounded-md";
  const secondary = "";

  return (
    <button
      className={classnames(base, type === "secondary" ? secondary : primary)}
    >
      {children}
    </button>
  );
}
