import Image from "next/image";
import { FC, ReactElement } from "react";
import { FaUser } from "react-icons/fa";

import { twm } from "@/src/libs";
import { TAvatarSize } from "@/src/types";

export interface IAvatar {
  className?: string;
  iconSize?: number;
  size?: TAvatarSize;
  src: string;
}

export const Avatar: FC<IAvatar> = (props): ReactElement => {
  const getSize = () => {
    switch (props.size) {
      case "lg":
        return { container: "min-h-16 min-w-16", icon: 32 };
      case "md":
        return { container: "min-h-14 min-w-14", icon: 28 };
      case "sm":
        return { container: "min-h-12 min-w-12", icon: 24 };
      default:
        return { container: "min-h-12 min-w-12", icon: 24 };
    }
  };

  const { container, icon } = getSize();

  return props.src ? (
    <div
      className={twm(
        "relative aspect-square size-fit overflow-hidden rounded-full border border-gray-400 bg-gray-200 dark:border-gray-200 dark:bg-gray-700",
        container,
        props.className,
      )}
    >
      <Image alt="Profile Image" className="object-cover" fill quality={50} src={props.src} />
    </div>
  ) : (
    <div
      className={twm(
        "flex aspect-square size-fit items-center justify-center rounded-full border border-gray-400 bg-gray-200 dark:border-gray-200 dark:bg-gray-700",
        container,
        props.className,
      )}
    >
      <FaUser className="text-gray-400 dark:text-gray-200" size={props.iconSize ? props.iconSize : icon} />
    </div>
  );
};
