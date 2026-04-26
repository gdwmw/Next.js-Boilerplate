"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useEffect, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Avatar, ExampleATWM, ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { DELETEUpload, IErrorResponse, inputValidations, POSTUpload, PUTUser } from "@/src/utils";

import { ProfileSchema, TProfileSchema } from "./schema";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

interface IFormField {
  label: string;
  maxLength?: number;
  name: keyof TProfileSchema;
  onKeyDown?: (e: KeyboardEvent) => void;
  type: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    label: "Name",
    maxLength: 50,
    name: "name",
    onKeyDown: (e) => inputValidations.name(e),
    type: "text",
  },
  {
    label: "Username",
    maxLength: 8,
    name: "username",
    onKeyDown: (e) => inputValidations.username(e),
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Phone",
    maxLength: 15,
    name: "phone",
    onKeyDown: (e) => inputValidations.phoneNumber(e),
    type: "tel",
  },
  {
    label: "Image",
    name: "image",
    type: "file",
  },
];

interface I {
  session: null | Session;
}

export const Main: FC<I> = (props): ReactElement => {
  const session = useSession();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [previewImage, setPreviewImage] = useState<null | string>(null);
  const [loading, setTransition] = useTransition();

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<TProfileSchema>({
    defaultValues: {
      email: props.session?.user?.email ?? undefined,
      name: props.session?.user?.name ?? undefined,
      phone: props.session?.user?.phone,
      username: props.session?.user?.username,
    },
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    // eslint-disable-next-line
    const file = watch("image")?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    //eslint-disable-next-line
  }, [watch("image")]);

  const onSubmit: SubmitHandler<TProfileSchema> = (dt) => {
    setTransition(async () => {
      try {
        let imageId: null | number | string | undefined = props.session?.user?.imageId;
        let imageUrl = props.session?.user?.image;
        let placeholder = props.session?.user?.placeholder;

        if (dt.image && dt.image.length > 0) {
          if (props.session?.user?.imageId) {
            await DELETEUpload(parseInt(props.session?.user?.imageId as string));
          }

          const uploadResponse = await POSTUpload({
            file: dt.image[0],
          });

          imageId = uploadResponse.data.id;
          imageUrl = uploadResponse.data.url;
          placeholder = uploadResponse.data.placeholder;
        }

        const userResponse = await PUTUser(Number(props.session?.user?.id), {
          email: dt.email,
          imageId: typeof imageId === "string" ? parseInt(imageId) : (imageId ?? null),
          name: dt.name,
          phone: dt.phone,
          username: dt.username,
        });

        await session.update({
          user: {
            ...session.data?.user,
            email: userResponse.data.email,
            image: imageUrl,
            imageId: userResponse.data.imageId,
            name: userResponse.data.name,
            phone: userResponse.data.phone,
            placeholder: placeholder,
            username: userResponse.data.username,
          },
        });

        console.info("Profile success!");
        router.refresh();
      } catch (error) {
        const axiosError = error as AxiosError<IErrorResponse>;
        setErrorMessage(axiosError.response?.data?.message ?? "Failed to update profile");
        console.warn("Profile failed!");
        console.error(error);
      }
    });
  };

  return (
    <main>
      <FormContainer className={{ innerContainer: "max-w-[450px]" }} href={"/"} label={"Home"}>
        <form className="flex w-full flex-col gap-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <Avatar
            className="mx-auto min-h-32 min-w-32"
            iconSize={64}
            src={previewImage ? previewImage : props.session?.user?.image ? `${API_URL}${props.session?.user?.image}` : ""}
          />

          {FORM_FIELDS_DATA.map((dt, i) => (
            <ExampleInput
              color="default"
              disabled={loading}
              errorMessage={errors[dt.name]?.message as string | undefined}
              key={i}
              label={dt.label}
              maxLength={dt.maxLength}
              onKeyDown={dt.onKeyDown}
              type={dt.type}
              {...register(dt.name)}
            />
          ))}

          <span className="text-center text-xs text-red-600">{errorMessage}</span>

          <div className="mx-auto text-center">
            <span className="text-xs">Do you want to change your password? </span>
            <Link
              className={ExampleATWM({ className: "inline text-xs", color: "blue", disabled: loading, size: "sm", variant: "ghost" })}
              href={"/password/change"}
              onClick={(e) => {
                if (loading) {
                  e.preventDefault();
                }
              }}
            >
              Click Here!
            </Link>
          </div>

          <SubmitButton color="black" disabled={loading} label="UPDATE" size="sm" variant="solid" />
        </form>
      </FormContainer>
    </main>
  );
};
