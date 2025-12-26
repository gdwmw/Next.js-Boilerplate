import { FC, ReactElement, ReactNode } from "react";

import { ExampleBContainer, ExampleBIcon, ExampleBText } from "..";

interface I {
  icon: ReactNode;
  iconColor: string;
  text: string;
  textColor: string;
}

const StoriesLayout: FC<I> = (props): ReactElement => (
  <ExampleBContainer>
    <ExampleBIcon style={{ color: props.iconColor }}>{props.icon}</ExampleBIcon>
    <ExampleBText style={{ color: props.textColor }}>{props.text}</ExampleBText>
  </ExampleBContainer>
);

export default StoriesLayout;
