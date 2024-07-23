import { FC, ReactElement, ReactNode } from "react";

import { ContainerExampleB, IconExampleB, TextExampleB } from "..";

interface ILayout {
  icon: ReactNode;
  iconColor: string;
  text: string;
  textColor: string;
}

const Layout: FC<ILayout> = (props): ReactElement => (
  <ContainerExampleB>
    <IconExampleB style={{ color: props.iconColor }}>{props.icon}</IconExampleB>
    <TextExampleB style={{ color: props.textColor }}>{props.text}</TextExampleB>
  </ContainerExampleB>
);

export default Layout;
