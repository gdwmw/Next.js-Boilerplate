"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleATWM, ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { RegisterSchema, TRegisterSchema } from "@/src/schemas";
import { getErrorMessageFromAPI, inputValidations, POSTRegister } from "@/src/utils";

interface IFormField {
  isPassword?: boolean;
  label: string;
  maxLength?: number;
  name: keyof TRegisterSchema;
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
    name: "phoneNumber",
    onKeyDown: (e) => inputValidations.phoneNumber(e),
    type: "tel",
  },
  {
    isPassword: true,
    label: "Password",
    maxLength: 72,
    name: "password",
    type: "password",
  },
  {
    isPassword: true,
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

export const Content: FC = (): ReactElement => {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [loading, setTransition] = useTransition();

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = (dt) => {
    setTransition(async () => {
      setErrorMessage("");

      if (getValues("password") === getValues("confirmPassword")) {
        try {
          await POSTRegister(dt);
          console.info("Register Success!");
          router.push("/authentication/login");
          reset();
        } catch (error) {
          setErrorMessage(getErrorMessageFromAPI(error));
          console.warn("Register Failed!");
        }
      } else {
        setErrorMessage("Confirm Password Does Not Match Password");
      }
    });
  };

  return (
    <main>
      <FormContainer className={{ innerContainer: "max-w-[450px]" }} href={"/"} label={"Home"}>
        <form className="flex w-full flex-col gap-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          {FORM_FIELDS_DATA.map((dt, i) => (
            <ExampleInput
              color="default"
              disabled={loading}
              errorMessage={errors[dt.name]?.message}
              icon={dt.isPassword ? passwordVisibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} /> : undefined}
              iconOnClick={dt.isPassword ? () => setPasswordVisibility((prev) => !prev) : undefined}
              key={i}
              label={dt.label}
              maxLength={dt.maxLength}
              onKeyDown={dt.onKeyDown}
              type={dt.isPassword ? (passwordVisibility ? "text" : "password") : dt.type}
              {...register(dt.name)}
            />
          ))}

          <span className="text-center text-xs text-red-600">{errorMessage}</span>

          <SubmitButton color="black" disabled={loading} label="REGISTER" size="sm" variant="solid" />

          <div className="mx-auto text-center">
            <span className="text-xs">Already have an account? </span>
            <Link
              className={ExampleATWM({ className: "inline text-xs", color: "blue", disabled: loading, size: "sm", variant: "ghost" })}
              href={"/authentication/login"}
              onClick={(e) => {
                if (loading) {
                  e.preventDefault();
                } else {
                  setPasswordVisibility(false);
                  setErrorMessage("");
                  reset();
                }
              }}
            >
              Login!
            </Link>
          </div>
        </form>
      </FormContainer>
    </main>
  );
};
