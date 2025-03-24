import Image from "next/image";
import { FC, ReactElement } from "react";

import Loading from "@/public/assets/animations/Loading.svg";
import { ExampleA, IExampleA } from "@/src/components";

export const SubmitButton: FC<{ label: string } & IExampleA> = ({ className, color, disabled, label, size, variant, ...props }): ReactElement => (
  <ExampleA className={className} color={color} disabled={disabled} size={size} type="submit" variant={variant} {...props}>
    {disabled ? <Image alt="Loading..." src={Loading} width={50} /> : label}
  </ExampleA>
);
