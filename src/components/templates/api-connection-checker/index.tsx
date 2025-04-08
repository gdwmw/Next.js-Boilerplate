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
    const handleSetArray = (index: number, value: boolean) => {
      const newArray = [...connection];
      newArray[index] = value;
      setConnection(newArray);
    };

    const checkConnection = async (index: number, url: string) => {
      try {
        await fetch(url, {
          cache: "no-store",
          method: "HEAD",
        });

        handleSetArray(index, true);
      } catch {
        handleSetArray(index, false);
      }
    };

    const handleCheckConnection = () =>
      ENVIRONMENT_DATA_VALUES.forEach(async (url, index) => {
        if (open && url) {
          await checkConnection(index, url);
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

            <div className="flex items-center gap-3 rounded-md border bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-800">
              <div className="flex size-8 items-center justify-center rounded-full bg-emerald-400 text-white">
                <IoCheckmark size={18} />
              </div>
              <div>
                <p className="font-semibold dark:text-white">Connected</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">NEXT_PUBLIC_EXAMPLE_URL</p>
              </div>
            </div>

            {ENVIRONMENT_DATA_VARIABLES.map((dt, index) => (
              <div className="flex items-center gap-3 rounded-md border bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-800" key={dt}>
                <div
                  className={`flex size-8 items-center justify-center rounded-full text-white ${connection[index] ? "bg-emerald-400" : "bg-rose-400"}`}
                >
                  {connection[index] ? <IoCheckmark size={18} /> : <IoClose size={18} />}
                </div>
                <div>
                  <p className="font-semibold dark:text-white">{connection[index] ? "Connected" : "Disconnected"}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{dt}</p>
                </div>
              </div>
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
