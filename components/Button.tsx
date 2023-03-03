import React from "react";
import classnames from "classnames";

interface ButtonProps {
  type?: "primary" | "secondary";
  href?: string;
  className?: string;
}

export default function Button({
  type,
  className,
  href,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  const base = "py-3 px-6 font-semibold flex items-center space-x-2";
  const primary = "bg-red-700 text-white rounded-md";
  const secondary = "";

  return (
    <a
      href={href || ""}
      className={classnames(
        base,
        type === "secondary" ? secondary : primary,
        className
      )}
    >
      {children}
    </a>
  );
}
