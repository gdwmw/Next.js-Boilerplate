import Link, { LinkProps } from "next/link";
import { FC, ReactElement, ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";

import { twm } from "@/src/libs";

import { ExampleATWM } from "../interfaces";

interface I extends Omit<LinkProps, "href"> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  href?: string;
  innerContainerClassName?: string;
  label?: string;
}

export const FormContainer: FC<I> = ({
  children,
  className,
  containerClassName,
  href,
  innerContainerClassName,
  label,
  ...linkProps
}): ReactElement => (
  <section className={twm("container mx-auto flex h-svh items-center justify-center p-5", containerClassName)}>
    <div className={twm("relative flex rounded-xl bg-white px-5 pb-5 pt-[60px] shadow-lg", !href && "p-5", innerContainerClassName)}>
      {href && (
        <Link
          className={ExampleATWM({ className: `absolute left-5 top-5 font-semibold ${className}`, color: "rose", size: "sm", variant: "ghost" })}
          href={href}
          {...linkProps}
        >
          <FaChevronLeft className="ml-1" size={12} /> {label}
        </Link>
      )}

      {children}
    </div>
  </section>
);
