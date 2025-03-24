import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react";

import { twm } from "@/src/libs";

interface IExampleBContainer extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

interface IExampleBIcon extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

interface IExampleBText extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const ExampleBContainer: FC<IExampleBContainer> = ({ className, ...props }): ReactElement => (
  <section className={twm("flex max-w-52 flex-col items-center text-center", className)} data-testid="example-b-container" {...props}>
    {props.children}
  </section>
);

export const ExampleBIcon: FC<IExampleBIcon> = ({ className, ...props }): ReactElement => (
  <span className={twm("flex size-20 items-center justify-center", className)} data-testid="example-b-icon" {...props}>
    {props.children}
  </span>
);

export const ExampleBText: FC<IExampleBText> = ({ className, ...props }): ReactElement => (
  <span className={twm("font-semibold", className)} data-testid="example-b-text" {...props}>
    {props.children}
  </span>
);
