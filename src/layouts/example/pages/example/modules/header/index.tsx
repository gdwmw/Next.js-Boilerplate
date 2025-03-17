import { FC, PropsWithChildren, ReactElement } from "react";

type T = Readonly<PropsWithChildren>;

export const Header: FC<T> = (props): ReactElement => <header>{props.children}</header>;
