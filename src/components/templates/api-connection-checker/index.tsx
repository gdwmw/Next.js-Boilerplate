"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import { IoCheckmark, IoClose } from "react-icons/io5";

import { ExampleA } from "../../elements";

const ENVIRONMENT_DATA_VARIABLES = ["NEXT_PUBLIC_BASE_API_URL"];
const ENVIRONMENT_DATA_VALUES = [process.env.NEXT_PUBLIC_BASE_API_URL];

export const APIConnectionChecker: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [connection, setConnection] = useState<boolean[]>([]);

  useEffect(() => {
    const handleSetArray = (value: boolean, index: number) => {
      const newArray = [...connection];
      newArray[index] = value;
      setConnection(newArray);
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

    const handleCheckConnection = () =>
      ENVIRONMENT_DATA_VALUES.forEach(async (url, i) => {
        if (open && url) {
          await checkConnection(url, i);
        }
      });
    handleCheckConnection();
    const interval = setInterval(handleCheckConnection, 30000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [open]);

  return (
    <section className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end">
        {open && (
          <div className="flex min-w-64 flex-col gap-2 rounded-lg bg-white p-5 shadow-lg dark:bg-black dark:shadow-white/10">
            <header className="flex items-center justify-between gap-5">
              <h1 className="text-lg font-semibold dark:text-white">API Connection Checker</h1>
              <ExampleA className="-mb-1" color={"rose"} onClick={() => setOpen(false)} size="sm" variant="ghost">
                <IoClose size={20} />
              </ExampleA>
            </header>

            <figure className="flex items-center gap-3 rounded-md border bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-800">
              <div className="flex size-8 items-center justify-center rounded-full bg-emerald-400 text-white">
                <IoCheckmark size={18} />
              </div>
              <figcaption>
                <h2 className="font-semibold dark:text-white">Connected</h2>
                <span className="block text-xs text-gray-600 dark:text-gray-300">NEXT_PUBLIC_EXAMPLE_URL</span>
              </figcaption>
            </figure>

            {ENVIRONMENT_DATA_VARIABLES.map((dt, i) => (
              <figure className="flex items-center gap-3 rounded-md border bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-800" key={i}>
                <div
                  className={`flex size-8 items-center justify-center rounded-full text-white ${connection[i] ? "bg-emerald-400" : "bg-rose-400"}`}
                >
                  {connection[i] ? <IoCheckmark size={18} /> : <IoClose size={18} />}
                </div>
                <figcaption>
                  <h2 className="font-semibold dark:text-white">{connection[i] ? "Connected" : "Disconnected"}</h2>
                  <span className="block text-xs text-gray-600 dark:text-gray-300">{dt}</span>
                </figcaption>
              </figure>
            ))}

            <p className="text-xs text-gray-400">Last checked: {new Date().toLocaleTimeString()}</p>
          </div>
        )}

        {!open && (
          <ExampleA className="min-w-16" color={"rose"} onClick={() => setOpen(true)} size="sm" variant="solid">
            <FaServer size={18} />
          </ExampleA>
        )}
      </div>
    </section>
  );
};
