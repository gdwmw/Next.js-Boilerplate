import { AVATAR_SIZE_OPTIONS, EXAMPLEA_COLOR_OPTIONS, EXAMPLEA_SIZE_OPTIONS, EXAMPLEA_VARIANT_OPTIONS, EXAMPLEC_COLOR_OPTIONS } from "@/src/libs";

// ----------------------------

export type TExampleAVariant = (typeof EXAMPLEA_VARIANT_OPTIONS)[number];
export type TExampleAColor = (typeof EXAMPLEA_COLOR_OPTIONS)[number];
export type TExampleASize = (typeof EXAMPLEA_SIZE_OPTIONS)[number];

// ----------------------------

export type TExampleCColor = (typeof EXAMPLEC_COLOR_OPTIONS)[number];

// ----------------------------

export type TAvatarSize = (typeof AVATAR_SIZE_OPTIONS)[number];
