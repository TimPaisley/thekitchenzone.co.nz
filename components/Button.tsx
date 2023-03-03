import React from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import * as gtag from "../lib/gtag";

interface ButtonProps {
  type?: "primary" | "secondary";
  href: string;
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

  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    gtag.event({
      action: "click_link",
      category: "Button",
      label: href,
      value: null,
    });

    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={classnames(
        base,
        type === "secondary" ? secondary : primary,
        className
      )}
    >
      {children}
    </Link>
  );
}
