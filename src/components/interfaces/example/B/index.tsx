import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs/tailwind-merge";

type TContainerExampleB = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type TIconExampleB = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type TTextExampleB = { className?: string } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export const ContainerExampleB: FC<TContainerExampleB> = ({ className, ...props }): ReactElement => (
  <section className={twm("flex max-w-52 flex-col items-center text-center", className)} data-testid="container-example-b" {...props}>
    {props.children}
  </section>
);

export const IconExampleB: FC<TIconExampleB> = ({ className, ...props }): ReactElement => (
  <span className={twm("flex size-20 items-center justify-center", className)} data-testid="icon-example-b" {...props}>
    {props.children}
  </span>
);

export const TextExampleB: FC<TTextExampleB> = ({ className, ...props }): ReactElement => (
  <span className={twm("font-semibold", className)} data-testid="text-example-b" {...props}>
    {props.children}
  </span>
);
