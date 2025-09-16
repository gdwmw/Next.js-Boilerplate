import Image from "next/image";
import { FC, ReactElement } from "react";

import loadingAnimation from "@/public/assets/animations/loadings/Loading-W.svg";
import { ExampleA, IExampleA } from "@/src/components";

export const SubmitButton: FC<{ label: string } & IExampleA> = ({ disabled, label, ...props }): ReactElement => (
  <ExampleA disabled={disabled} type="submit" {...props}>
    {disabled ? <Image alt="Loading..." src={loadingAnimation} width={20} /> : label}
  </ExampleA>
);
