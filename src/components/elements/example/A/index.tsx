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
    variant !== "ghost" && "justify-center rounded-full",
    disabled ? "cursor-not-allowed" : "active:scale-95",

    // ⭐ === SOLID === ⭐
    variant === "solid" &&
      color === "rose" &&
      !disabled &&
      "bg-rose-400 text-white hover:bg-rose-500 hover:ring-1 hover:ring-rose-600 active:bg-rose-600",

    variant === "solid" &&
      color === "emerald" &&
      !disabled &&
      "bg-emerald-400 text-white hover:bg-emerald-500 hover:ring-1 hover:ring-emerald-600 active:bg-emerald-600",

    variant === "solid" && disabled && "bg-gray-400 text-white",

    // ⭐ === OUTLINE === ⭐
    variant === "outline" &&
      color === "rose" &&
      !disabled &&
      "bg-transparent text-rose-400 ring-1 ring-rose-400 hover:bg-rose-500 hover:text-white hover:ring-rose-600 active:bg-rose-600",

    variant === "outline" &&
      color === "emerald" &&
      !disabled &&
      "bg-transparent text-emerald-400 ring-1 ring-emerald-400 hover:bg-emerald-500 hover:text-white hover:ring-emerald-600 active:bg-emerald-600",

    variant === "outline" && disabled && "bg-transparent text-gray-400 ring-1 ring-gray-400",

    // ⭐ === GHOST === ⭐
    variant === "ghost" && color === "rose" && !disabled && "text-rose-400 hover:text-rose-500 active:text-rose-600",

    variant === "ghost" && color === "emerald" && !disabled && "text-emerald-400 hover:text-emerald-500 active:text-emerald-600",

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
