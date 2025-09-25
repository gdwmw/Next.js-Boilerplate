"use client";

import { useTheme } from "next-themes";
import { FC, ReactElement } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

import { setCookie } from "@/src/utils";

import { ExampleA, IExampleA } from "../..";

interface I extends IExampleA {
  cookie: string;
}

export const ChangeThemeButton: FC<I> = ({ cookie, ...props }): ReactElement => {
  const { setTheme, theme } = useTheme();

  const getThemeIcon = (dt: string) => {
    switch (dt) {
      case "dark":
        return <FaMoon size={18} />;
      case "light":
        return <FaSun size={18} />;
      default:
        return <FaDesktop size={18} />;
    }
  };

  const handleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    await setCookie({ name: "theme", value: newTheme });
    setTheme(newTheme);
  };

  return (
    <ExampleA onClick={handleTheme} {...props}>
      {getThemeIcon(cookie)}
    </ExampleA>
  );
};
