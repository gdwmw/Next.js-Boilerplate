"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useEffect, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Avatar, ExampleATWM, ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { inputValidations } from "@/src/hooks";
import { ProfileSchema, TProfileSchema } from "@/src/schemas";
import { DELETEUpload, POSTUpload, PUTData, PUTUser } from "@/src/utils";

const API_URL = process.env.NEXT_PUBLIC_EXAMPLE_URL;

if (!API_URL) {
  throw new Error("The API URL is not defined. Please check your environment variables.");
}

interface IFormField {
  id: number;
  label: string;
  maxLength?: number;
  name: keyof TProfileSchema;
  onKeyDown?: (e: KeyboardEvent) => void;
  type: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    id: 1,
    label: "Name",
    maxLength: 50,
    name: "name",
    onKeyDown: (e) => inputValidations.name(e),
    type: "text",
  },
  {
    id: 2,
    label: "Username",
    maxLength: 8,
    name: "username",
    onKeyDown: (e) => inputValidations.username(e),
    type: "text",
  },
  {
    id: 3,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    id: 4,
    label: "Phone",
    maxLength: 15,
    name: "phoneNumber",
    onKeyDown: (e) => inputValidations.phoneNumber(e),
    type: "tel",
  },
  {
    id: 5,
    label: "Image",
    name: "image",
    type: "file",
  },
];

interface I {
  session: null | Session;
}

export const Content: FC<I> = (props): ReactElement => {
  const session = useSession();
  const router = useRouter();
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
      phoneNumber: props.session?.user?.phoneNumber,
      username: props.session?.user?.username,
    },
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    const file = watch("image")?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
    // eslint-disable-next-line
  }, [watch("image")]);

  const onSubmit: SubmitHandler<TProfileSchema> = (dt) => {
    setTransition(async () => {
      try {
        const userResponse = await PUTUser({
          email: dt.email,
          id: Number(props.session?.user?.id),
          username: dt.username,
        });

        const dataResponse = await PUTData({
          documentId: props.session?.user?.dataDocumentId ?? "",
          name: dt.name,
          phoneNumber: dt.phoneNumber,
        });

        let imageId = props.session?.user?.imageId;
        let imageUrl = props.session?.user?.image;

        if (dt.image && dt.image.length > 0) {
          if (props.session?.user?.imageId) {
            await DELETEUpload(parseInt(props.session?.user?.imageId));
          }

          const uploadResponse = await POSTUpload({
            field: "image",
            files: dt.image,
            ref: "api::data.data",
            refId: props.session?.user?.dataId ?? "",
          });

          imageId = uploadResponse[0].id.toString();
          imageUrl = API_URL + uploadResponse[0].url;
        }

        await session.update({
          user: {
            ...session.data?.user,
            email: userResponse.email,
            image: imageUrl,
            imageId: imageId,
            name: dataResponse.name,
            phoneNumber: dataResponse.phoneNumber,
            username: userResponse.username,
          },
        });

        console.log("Profile Success!");
        router.refresh();
      } catch {
        console.log("Profile Failed!");
      }
    });
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <FormContainer className={{ innerContainer: "max-h-[624px] w-full max-w-[450px]" }} href={"/"} label={"Home"}>
        <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Avatar size="md" src={previewImage ?? props.session?.user?.image ?? ""} />

          {FORM_FIELDS_DATA.map((dt) => (
            <ExampleInput
              color="rose"
              disabled={loading}
              errorMessage={errors[dt.name]?.message}
              key={dt.id}
              label={dt.label}
              maxLength={dt.maxLength}
              onKeyDown={dt.onKeyDown}
              type={dt.type}
              {...register(dt.name)}
            />
          ))}

          <div className="flex justify-center gap-1 max-[350px]:flex-col max-[350px]:items-center">
            <span className="text-xs">Do you want to change your password?</span>
            <Link
              className={ExampleATWM({ className: "text-xs", color: "rose", disabled: loading, size: "sm", variant: "ghost" })}
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

          <SubmitButton color="rose" disabled={loading} label="UPDATE" size="sm" variant="solid" />
        </form>
      </FormContainer>
    </main>
  );
};
