"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { FC, HTMLInputTypeAttribute, ReactElement, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { ChangePasswordSchema, TChangePasswordSchema } from "@/src/schemas";
import { getErrorMessageFromAPI, POSTChangePassword } from "@/src/utils";

interface IFormField {
  label: string;
  maxLength?: number;
  name: keyof TChangePasswordSchema;
  type: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    label: "Current Password",
    name: "currentPassword",
    type: "password",
  },
  {
    label: "New Password",
    maxLength: 72,
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "passwordConfirmation",
    type: "password",
  },
];

export const Content: FC = (): ReactElement => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [loading, setTransition] = useTransition();

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit: SubmitHandler<TChangePasswordSchema> = (dt) => {
    setTransition(async () => {
      setErrorMessage("");

      if (getValues("password") === getValues("passwordConfirmation")) {
        try {
          await POSTChangePassword(dt);
          console.info("Change Password Success!");
          signOut();
          reset();
        } catch (error) {
          setErrorMessage(getErrorMessageFromAPI(error));
          console.warn("Change Password Failed!");
        }
      } else {
        setErrorMessage("Confirm Password Does Not Match New Password");
      }
    });
  };

  return (
    <main>
      <FormContainer className={{ innerContainer: "max-w-[350px]" }} href={"/profile"} label={"Back"}>
        <form className="flex w-full flex-col gap-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          {FORM_FIELDS_DATA.map((dt, i) => (
            <ExampleInput
              color="default"
              disabled={loading}
              errorMessage={errors[dt.name]?.message}
              icon={passwordVisibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
              iconOnClick={() => setPasswordVisibility((prev) => !prev)}
              key={i}
              label={dt.label}
              maxLength={dt.maxLength}
              type={passwordVisibility ? "text" : "password"}
              {...register(dt.name)}
            />
          ))}

          <span className="text-center text-xs text-red-600">{errorMessage}</span>

          <SubmitButton color="black" disabled={loading} label="UPDATE" size="sm" variant="solid" />
        </form>
      </FormContainer>
    </main>
  );
};
