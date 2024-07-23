import { FC, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/src/libs";

interface I extends Readonly<PropsWithChildren> {
  className?: string;
}

export const ExampleInputsContainer: FC<I> = (props): ReactElement => (
  <section className={twm("space-y-1", props.className)}>{props.children}</section>
);
