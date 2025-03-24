"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleATWM, ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { inputValidations } from "@/src/hooks";
import { RegisterSchema, TRegisterSchema } from "@/src/schemas";
import { POSTRegister } from "@/src/utils";

interface IFormField {
  id: number;
  isPassword?: boolean;
  label: string;
  maxLength?: number;
  name: keyof TRegisterSchema;
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
    isPassword: true,
    label: "Password",
    maxLength: 72,
    name: "password",
    type: "password",
  },
  {
    id: 6,
    isPassword: true,
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

export const Content: FC = (): ReactElement => {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
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
      setPasswordNotMatch(false);

      if (getValues("password") === getValues("confirmPassword")) {
        try {
          await POSTRegister(dt);
          console.log("Register Success!");
          router.push("/authentication/login");
          reset();
        } catch {
          console.log("Register Failed!");
        }
      } else {
        setPasswordNotMatch(true);
      }
    });
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <FormContainer className={{ innerContainer: "max-h-[556px] w-full max-w-[450px]" }} href={"/"} label={"Home"}>
        <form className="flex w-full flex-col gap-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          {FORM_FIELDS_DATA.map((dt) => (
            <ExampleInput
              color="rose"
              disabled={loading}
              errorMessage={errors[dt.name]?.message}
              icon={dt.isPassword ? passwordVisibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} /> : undefined}
              iconOnClick={dt.isPassword ? () => setPasswordVisibility((prev) => !prev) : undefined}
              key={dt.id}
              label={dt.label}
              maxLength={dt.maxLength}
              onKeyDown={dt.onKeyDown}
              type={dt.isPassword ? (passwordVisibility ? "text" : "password") : dt.type}
              {...register(dt.name)}
            />
          ))}

          <span className="text-center text-sm text-red-600">{passwordNotMatch && "Confirm Password does not match Password"}</span>

          <SubmitButton color="rose" disabled={loading} label="REGISTER" size="sm" variant="solid" />

          <div className="flex justify-center gap-1">
            <span className="text-xs">Already have an account?</span>
            <Link
              className={ExampleATWM({ className: "text-xs", color: "rose", disabled: loading, size: "sm", variant: "ghost" })}
              href={"/authentication/login"}
              onClick={(e) => {
                if (loading) {
                  e.preventDefault();
                } else {
                  setPasswordVisibility(false);
                  setPasswordNotMatch(false);
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
