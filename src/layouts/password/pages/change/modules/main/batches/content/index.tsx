"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleA, ExampleInput, FormContainer } from "@/src/components";
import { ChangePasswordSchema, TChangePasswordSchema } from "@/src/schemas";
import { POSTChangePassword } from "@/src/utils";

interface IFormField {
  id: number;
  label: string;
  maxLength?: number;
  name: keyof TChangePasswordSchema;
  onKeyDown?: (e: KeyboardEvent) => void;
  type: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    id: 1,
    label: "Current Password",
    name: "currentPassword",
    type: "password",
  },
  {
    id: 2,
    label: "Password",
    maxLength: 72,
    name: "password",
    type: "password",
  },
  {
    id: 3,
    label: "Confirm Password",
    name: "passwordConfirmation",
    type: "password",
  },
];

export const Content: FC = (): ReactElement => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit: SubmitHandler<TChangePasswordSchema> = async (dt) => {
    setLoading(true);
    setPasswordNotMatch(false);

    if (getValues("password") === getValues("passwordConfirmation")) {
      try {
        await POSTChangePassword(dt);
        console.log("Change Password Success!");
        signOut();
        reset();
      } catch {
        console.log("Change Password Failed!");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setPasswordNotMatch(true);
    }
  };

  return (
    <main className="bg-slate-100">
      <FormContainer href={"/profile"} innerContainerClassName="w-full max-w-[350px]" label={"Back"}>
        <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {FORM_FIELDS_DATA.map((dt) => (
            <ExampleInput
              color="rose"
              disabled={loading}
              errorMessage={errors[dt.name]?.message}
              icon={passwordVisibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
              iconOnClick={() => setPasswordVisibility((prev) => !prev)}
              key={dt.id}
              label={dt.label}
              maxLength={dt.maxLength}
              onKeyDown={dt.onKeyDown}
              type={passwordVisibility ? "text" : "password"}
              {...register(dt.name)}
            />
          ))}

          <span className="text-center text-sm text-red-600">{passwordNotMatch && "Confirm Password does not match Password"}</span>

          <ExampleA className="w-full font-semibold" color="rose" disabled={loading} size="sm" type="submit" variant="solid">
            {loading ? "Loading..." : "UPDATE"}
          </ExampleA>
        </form>
      </FormContainer>
    </main>
  );
};
