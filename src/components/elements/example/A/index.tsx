import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement } from "react";

import { twm } from "@/src/libs";
import { TExampleAColor, TExampleASize, TExampleAVariant } from "@/src/types";

export interface IExampleA extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color: TExampleAColor;
  size: TExampleASize;
  variant: TExampleAVariant;
}

export const ExampleATWM = ({ className, color, disabled, size, variant }: IExampleA) =>
  twm(
    "flex items-center gap-2 font-semibold",
    // ⭐ === BASE === ⭐
    variant !== "ghost" && "justify-center rounded-md",
    disabled ? "cursor-not-allowed" : "active:scale-95",

    // ⭐ === SOLID === ⭐
    variant === "solid" && color === "red" && !disabled && "bg-red-500 text-white",

    variant === "solid" && color === "green" && !disabled && "bg-green-500 text-white",

    variant === "solid" && color === "blue" && !disabled && "bg-blue-500 text-white",

    variant === "solid" && color === "black" && !disabled && "bg-black text-white dark:bg-white dark:text-black",

    variant === "solid" && color === "white" && !disabled && "bg-white text-black dark:bg-black dark:text-white",

    variant === "solid" && color === "gray" && !disabled && "bg-gray-200 text-black dark:bg-gray-500 dark:text-white",

    variant === "solid" && disabled && "bg-gray-400 text-white",

    // ⭐ === OUTLINE === ⭐
    variant === "outline" &&
      color === "red" &&
      !disabled &&
      "bg-transparent text-red-500 ring-1 ring-inset ring-red-500 hover:bg-red-500 hover:text-white",

    variant === "outline" &&
      color === "green" &&
      !disabled &&
      "bg-transparent text-green-500 ring-1 ring-inset ring-green-500 hover:bg-green-500 hover:text-white",

    variant === "outline" &&
      color === "blue" &&
      !disabled &&
      "bg-transparent text-blue-500 ring-1 ring-inset ring-blue-500 hover:bg-blue-500 hover:text-white",

    variant === "outline" &&
      color === "black" &&
      !disabled &&
      "bg-transparent text-black ring-1 ring-inset ring-black hover:bg-black hover:text-white dark:text-white dark:ring-white dark:hover:bg-white dark:hover:text-black",

    variant === "outline" &&
      color === "white" &&
      !disabled &&
      "bg-transparent text-white ring-1 ring-inset ring-white hover:bg-white hover:text-black dark:text-black dark:ring-black dark:hover:bg-black dark:hover:text-white",

    variant === "outline" &&
      color === "gray" &&
      !disabled &&
      "bg-transparent text-gray-200 ring-1 ring-inset ring-gray-200 hover:bg-gray-200 hover:text-black dark:text-gray-500 dark:ring-gray-500 dark:hover:bg-gray-500 dark:hover:text-white",

    variant === "outline" && disabled && "bg-transparent text-gray-400 ring-1 ring-inset ring-gray-400",

    // ⭐ === GHOST === ⭐
    variant === "ghost" && color === "red" && !disabled && "text-red-500",

    variant === "ghost" && color === "green" && !disabled && "text-green-500",

    variant === "ghost" && color === "blue" && !disabled && "text-blue-500",

    variant === "ghost" && color === "black" && !disabled && "text-black dark:text-white",

    variant === "ghost" && color === "white" && !disabled && "text-white dark:text-black",

    variant === "ghost" && color === "gray" && !disabled && "text-gray-200 dark:text-gray-500",

    variant === "ghost" && disabled && "text-gray-400",

    // ⭐ === SIZE === ⭐
    size === "sm" && variant !== "ghost" && "h-10 min-h-10 min-w-28 px-3 text-base",

    size === "md" && variant !== "ghost" && "h-11 min-h-11 min-w-32 px-4 text-lg",

    size === "lg" && variant !== "ghost" && "h-12 min-h-12 min-w-36 px-5 text-xl",

    // ⭐ === GHOST SIZE === ⭐
    size === "sm" && variant === "ghost" && "text-base",

    size === "md" && variant === "ghost" && "text-lg",

    size === "lg" && variant === "ghost" && "text-xl",

    // ⭐ === CLASSNAME === ⭐
    className,
  );

export const ExampleA: FC<IExampleA> = ({ className, color, disabled, size, variant, ...props }): ReactElement => (
  <button className={ExampleATWM({ className, color, disabled, size, variant })} data-testid="example-a" disabled={disabled} {...props}>
    {props.children}
  </button>
);
