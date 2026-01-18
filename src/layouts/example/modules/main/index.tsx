import { FC, PropsWithChildren, ReactElement } from "react";

type T = Readonly<PropsWithChildren>;

export const Main: FC<T> = (props): ReactElement => <main>{props.children}</main>;
