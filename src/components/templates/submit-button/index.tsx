import Image from "next/image";
import { FC, ReactElement } from "react";

import Loading from "@/public/assets/animations/Loading.svg";
import { ExampleA, IExampleA } from "@/src/components";

export const SubmitButton: FC<{ label: string } & IExampleA> = ({ disabled, label, ...props }): ReactElement => (
  <ExampleA disabled={disabled} type="submit" {...props}>
    {disabled ? <Image alt="Loading..." src={Loading} width={50} /> : label}
  </ExampleA>
);
