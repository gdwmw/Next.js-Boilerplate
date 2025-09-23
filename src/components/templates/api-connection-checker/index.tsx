"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import { IoCheckmark, IoClose } from "react-icons/io5";

import { useToggle } from "@/src/hooks";

import { ExampleA } from "../../elements";

const ENVIRONMENT_DATA_VARIABLES = ["NEXT_PUBLIC_BASE_API_URL"];
const ENVIRONMENT_DATA_VALUES = [process.env.NEXT_PUBLIC_BASE_API_URL];

export const APIConnectionChecker: FC = (): ReactElement => {
  const { toggle, value } = useToggle();
  const [connection, setConnection] = useState<boolean[]>(() => ENVIRONMENT_DATA_VALUES.map(() => false));

  useEffect(() => {
    if (value) {
      setConnection(ENVIRONMENT_DATA_VALUES.map(() => false));
    }

    const handleSetArray = (value: boolean, index: number) => {
      setConnection((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
    };

    const checkConnection = async (url: string, index: number) => {
      try {
        await fetch(url, {
          cache: "no-store",
          method: "HEAD",
        });
        handleSetArray(true, index);
      } catch {
        handleSetArray(false, index);
      }
    };

    const handleCheckConnection = () => {
      if (!value) {
        return;
      }
      const tasks = ENVIRONMENT_DATA_VALUES.map((url, i) => {
        if (!url) {
          handleSetArray(false, i);
          return Promise.resolve();
        }
        return checkConnection(url, i);
      });
      void Promise.allSettled(tasks);
    };

    handleCheckConnection();
    const interval = setInterval(handleCheckConnection, 30000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <section className="fixed bottom-5 right-5 z-50 w-[calc(100%-40px)] max-w-full sm:w-auto sm:max-w-sm">
      <div className="flex flex-col items-end">
        {value && (
          <div className="flex max-h-[70vh] w-full flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm shadow-black/50 sm:w-auto sm:p-5 dark:border-gray-600 dark:bg-gray-800 dark:shadow-white/70">
            <div className="flex items-center justify-between gap-3 sm:gap-5">
              <h1 className="truncate text-base font-semibold sm:text-lg dark:text-white">API Connection Checker</h1>
              <ExampleA className="-mb-0.5" color="blue" onClick={() => toggle()} size="sm" variant="ghost">
                <IoClose size={20} />
              </ExampleA>
            </div>

            <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-700">
              <div className="flex min-h-8 min-w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <IoCheckmark size={18} />
              </div>
              <div className="overflow-hidden">
                <h2 className="text-sm font-semibold sm:text-base dark:text-white">Connected</h2>
                <span className="block max-w-[200px] truncate text-xs text-gray-600 sm:max-w-xs dark:text-gray-300">NEXT_PUBLIC_EXAMPLE_URL</span>
              </div>
            </div>

            {ENVIRONMENT_DATA_VARIABLES.map((dt, i) => (
              <div
                className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-700"
                key={i}
              >
                <div
                  className={`flex min-h-8 min-w-8 items-center justify-center rounded-full text-white ${connection[i] ? "bg-green-500" : "bg-red-500"}`}
                >
                  {connection[i] ? <IoCheckmark size={18} /> : <IoClose size={18} />}
                </div>
                <div className="overflow-hidden">
                  <h2 className="text-sm font-semibold sm:text-base dark:text-white">{connection[i] ? "Connected" : "Disconnected"}</h2>
                  <span className="block max-w-[200px] truncate text-xs text-gray-600 sm:max-w-xs dark:text-gray-300">{dt}</span>
                </div>
              </div>
            ))}

            <p className="mt-1 text-xs text-gray-400">Last checked: {new Date().toLocaleTimeString()}</p>
          </div>
        )}

        {!value && (
          <ExampleA className="min-w-10" color="blue" onClick={() => toggle()} size="sm" variant="solid">
            <FaServer size={18} />
          </ExampleA>
        )}
      </div>
    </section>
  );
};
