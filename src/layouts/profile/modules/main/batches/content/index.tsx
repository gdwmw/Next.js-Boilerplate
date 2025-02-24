"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ExampleA, ExampleATWM, ExampleInput, FormContainer } from "@/src/components";
import { inputValidations } from "@/src/hooks";
import { ProfileSchema, TProfileSchema } from "@/src/schemas";
import { DELETEUpload, GETDatasByDocumentId, POSTUpload, PUTDatas, PUTUsers } from "@/src/utils";

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
  const [loading, setLoading] = useState(false);

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

  const onSubmit: SubmitHandler<TProfileSchema> = async (dt) => {
    setLoading(true);

    try {
      const usersResponse = await PUTUsers({
        email: dt.email,
        id: Number(props.session?.user?.id),
        username: dt.username,
      });

      const datasResponse = await PUTDatas({
        documentId: props.session?.user?.datasDocumentId ?? "",
        name: dt.name,
        phoneNumber: dt.phoneNumber,
      });

      let imageUrl = props.session?.user?.image;

      if (dt.image && dt.image.length > 0) {
        const datasByDocumentIdResponse = await GETDatasByDocumentId(props.session?.user?.datasDocumentId ?? "");

        if (datasByDocumentIdResponse.image?.id !== 1) {
          await DELETEUpload(datasByDocumentIdResponse.image?.id ?? 0);
        }

        const uploadResponse = await POSTUpload({
          field: "image",
          files: dt.image,
          ref: "api::data.data",
          refId: props.session?.user?.datasId ?? "",
        });

        imageUrl = uploadResponse[0].url;
      }

      await session.update({
        user: {
          ...session.data?.user,
          email: usersResponse.email,
          image: imageUrl,
          name: datasResponse.name,
          phoneNumber: datasResponse.phoneNumber,
          username: usersResponse.username,
        },
      });

      console.log("Profile Success!");
      router.refresh();
    } catch {
      console.log("Profile Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-100">
      <FormContainer href={"/"} innerContainerClassName="size-full max-h-[624px] max-w-[450px]" label={"Home"}>
        <form className="w-full space-y-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mx-auto aspect-square size-32 overflow-hidden rounded-full border border-gray-200">
            <Image alt="Review Image" className="object-cover" fill quality={50} src={previewImage ?? props.session?.user?.image ?? ""} />
          </div>

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

          <div className="flex justify-center gap-1">
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

          <ExampleA className="w-full font-semibold" color="rose" disabled={loading} size="sm" type="submit" variant="solid">
            {loading ? "Loading..." : "UPDATE"}
          </ExampleA>
        </form>
      </FormContainer>
    </main>
  );
};
