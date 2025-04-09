import Image from "next/image";
import { FC, ReactElement } from "react";
import { FaUser } from "react-icons/fa";

interface I {
  size: "lg" | "md" | "sm";
  src: string;
}

export const Avatar: FC<I> = (props): ReactElement => {
  const getSize = () => {
    switch (props.size) {
      case "lg":
        return { container: "min-h-40 min-w-40", icon: 80 };
      case "md":
        return { container: "min-h-32 min-w-32", icon: 64 };
      case "sm":
        return { container: "min-h-24 min-w-24", icon: 48 };
      default:
        return { container: "min-h-32 min-w-32", icon: 64 };
    }
  };

  const { container, icon } = getSize();

  return props.src ? (
    <div className={`relative mx-auto aspect-square size-fit overflow-hidden rounded-full border bg-gray-100 dark:border-gray-600 ${container}`}>
      <Image alt="Profile Image" className="object-cover" fill quality={50} src={props.src} />
    </div>
  ) : (
    <div
      className={`mx-auto flex aspect-square size-fit items-center justify-center rounded-full border bg-gray-100 dark:border-gray-600 dark:bg-gray-800 ${container}`}
    >
      <FaUser className="text-gray-400" size={icon} />
    </div>
  );
};
