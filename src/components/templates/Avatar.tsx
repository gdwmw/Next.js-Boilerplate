import { User } from "lucide-react";
import Image from "next/image";
import { FC, ReactElement } from "react";

import { twm } from "@/src/libs";

export const AVATAR_SIZE_OPTIONS = ["lg", "md", "sm"] as const;
export type TAvatarSize = (typeof AVATAR_SIZE_OPTIONS)[number];

export interface IAvatar {
  className?: string;
  iconSize?: number;
  placeholder?: null | string;
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
      <Image
        alt="Profile Image"
        blurDataURL={props.placeholder ?? ""}
        className="object-cover"
        fill
        placeholder={props.placeholder ? "blur" : "empty"}
        quality={50}
        src={props.src}
      />
    </div>
  ) : (
    <div
      className={twm(
        "flex aspect-square size-fit items-center justify-center rounded-full border border-gray-400 bg-gray-200 dark:border-gray-200 dark:bg-gray-700",
        container,
        props.className,
      )}
    >
      <User className="text-gray-400 dark:text-gray-200" size={props.iconSize ? props.iconSize : icon} />
    </div>
  );
};
