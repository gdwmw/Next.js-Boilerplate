import { FC, ReactElement } from "react";

import { ExampleA, TExampleA } from "..";

type T = Omit<TExampleA, "className">;

const Layout: FC<T> = (props): ReactElement => (
  <ExampleA color={props.color} disabled={props.disabled} size={props.size} variant={props.variant} {...props}>
    {props.children}
  </ExampleA>
);

export default Layout;
