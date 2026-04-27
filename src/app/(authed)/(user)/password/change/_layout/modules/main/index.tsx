"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Eye, EyeOff } from "lucide-react";
import { signOut } from "next-auth/react";
import { FC, HTMLInputTypeAttribute, ReactElement, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { IErrorResponse, POSTChangePassword } from "@/src/utils";

import { ChangePasswordSchema, TChangePasswordSchema } from "./schema";

interface IFormField {
  label: string;
  maxLength?: number;
  name: keyof TChangePasswordSchema;
  type: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    label: "Current Password",
    name: "oldPassword",
    type: "password",
  },
  {
    label: "New Password",
    maxLength: 72,
    name: "newPassword",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

export const Main: FC = (): ReactElement => {
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

      if (getValues("newPassword") === getValues("confirmPassword")) {
        try {
          const { confirmPassword: _confirmPassword, ...changePasswordPayload } = dt;
          await POSTChangePassword(changePasswordPayload);
          console.info("Change password success!");
          signOut();
          reset();
        } catch (error) {
          const axiosError = error as AxiosError<IErrorResponse>;
          setErrorMessage(axiosError.response?.data?.message ?? "Failed to change password");
          console.warn("Change password failed!");
        }
      } else {
        setErrorMessage("Confirm password does not match new password");
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
              icon={passwordVisibility ? <Eye size={18} /> : <EyeOff size={18} />}
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
