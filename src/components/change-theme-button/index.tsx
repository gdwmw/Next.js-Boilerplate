"use client";

import { useTheme } from "next-themes";
import { FC, ReactElement } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

import { ExampleA } from "@/src/components";
import { setCookie } from "@/src/hooks";

interface I {
  cookie: string | undefined;
}

export const ChangeThemeButton: FC<I> = (props): ReactElement => {
  const { setTheme, theme } = useTheme();

  const getThemeIcon = (cookie: string | undefined) => {
    switch (cookie) {
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
    <ExampleA className="min-w-16" color="rose" onClick={handleTheme} size="sm" variant="outline">
      {getThemeIcon(props.cookie)}
    </ExampleA>
  );
};
