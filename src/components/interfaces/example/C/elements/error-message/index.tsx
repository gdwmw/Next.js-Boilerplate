import { FC, ReactElement } from "react";

interface I {
  errorMessage: string;
}

export const ExampleErrorMessage: FC<I> = (props): ReactElement => (
  <span className="ml-1 block text-xs font-semibold text-red-600" data-testid="example-error-message">
    {props.errorMessage}
  </span>
);
