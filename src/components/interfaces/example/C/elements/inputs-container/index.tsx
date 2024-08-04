import { FC, PropsWithChildren, ReactElement } from "react";

import { twm } from "@/root/src/libs/tailwind-merge";

type T = {
  className?: string;
} & Readonly<PropsWithChildren>;

export const InputsContainer: FC<T> = (props): ReactElement => <section className={twm("space-y-1", props.className)}>{props.children}</section>;
