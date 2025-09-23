import Link, { LinkProps } from "next/link";
import { FC, ReactElement, ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";

import { twm } from "@/src/libs";

import { ExampleATWM } from "../..";

interface I extends Omit<LinkProps, "href"> {
  children: ReactNode;
  className?: {
    container?: string;
    innerContainer?: string;
    link?: string;
  };
  href: string;
  label: string;
}

export const FormContainer: FC<I> = ({ children, className, href, label, ...props }): ReactElement => (
  <section className={twm("container mx-auto flex h-dvh items-center justify-center p-5", className?.container)}>
    <div
      className={twm(
        "relative flex max-h-full w-full rounded-xl border border-gray-200 bg-white px-5 pb-5 pt-[60px] shadow-sm shadow-black/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:shadow-white/70",
        !href && "p-5",
        className?.innerContainer,
      )}
    >
      {href && (
        <Link
          className={ExampleATWM({
            className: `absolute left-5 top-5 font-semibold ${className?.link}`,
            color: "black",
            size: "sm",
            variant: "ghost",
          })}
          href={href}
          {...props}
        >
          <FaChevronLeft className="ml-1" size={12} /> {label}
        </Link>
      )}

      {children}
    </div>
  </section>
);
