"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleA, ExampleATWM } from "@/src/components/interfaces/example/A";
import { ExampleInput } from "@/src/components/interfaces/example/C";
import { inputValidations } from "@/src/hooks/functions";
import { RegisterSchema, TRegisterSchema } from "@/src/schemas/auth";
import { POSTRegister } from "@/src/utils/api";

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
    label: "Phone Number",
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
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = async (dt) => {
    setLoading(true);
    setPasswordNotMatch(false);

    if (getValues("password") === getValues("confirmPassword")) {
      try {
        await POSTRegister(dt);
        console.log("Register Success!");
        router.push("/login");
        reset();
      } catch {
        console.log("Register Failed!");
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
      <section className="container mx-auto flex h-screen items-center justify-center p-5">
        <div className="relative flex w-full max-w-[450px] justify-center rounded-xl bg-white px-5 pb-5 pt-[60px] shadow-lg">
          <Link className={ExampleATWM({ className: "absolute left-5 top-5 font-semibold", color: "rose", size: "sm", variant: "ghost" })} href={"/"}>
            <FaChevronLeft className="ml-1" size={12} /> Home
          </Link>
          <form className="flex w-full max-w-96 flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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

            <ExampleA className="font-semibold" color="rose" disabled={loading} size="sm" type="submit" variant="solid">
              {loading ? "Loading..." : "REGISTER"}
            </ExampleA>

            <div className="flex justify-center gap-1">
              <span className="text-xs">Already have an account?</span>
              <Link
                className={ExampleATWM({ className: "text-xs", color: "rose", disabled: loading, size: "sm", variant: "ghost" })}
                href={"/login"}
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
        </div>
      </section>
    </main>
  );
};
