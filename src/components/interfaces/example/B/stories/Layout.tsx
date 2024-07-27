import { FC, ReactElement, ReactNode } from "react";

import { ContainerExampleB, IconExampleB, TextExampleB } from "..";

type TLayout = {
  icon: ReactNode;
  iconColor: string;
  text: string;
  textColor: string;
};

const Layout: FC<TLayout> = (props): ReactElement => (
  <ContainerExampleB>
    <IconExampleB style={{ color: props.iconColor }}>{props.icon}</IconExampleB>
    <TextExampleB style={{ color: props.textColor }}>{props.text}</TextExampleB>
  </ContainerExampleB>
);

export default Layout;
