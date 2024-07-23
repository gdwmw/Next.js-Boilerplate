"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleA, ExampleATWM } from "@/src/components/interfaces/example/A";
import { ExampleInput } from "@/src/components/interfaces/example/C";
import { LoginSchema, TLoginSchema } from "@/src/schemas/auth";

export const Content: FC = (): ReactElement => {
  const router = useRouter();
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema(loginWithEmail ? "Email" : "Username")),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (dt) => {
    setLoading(true);
    setInvalidCredentials(false);

    try {
      const res = await signIn("credentials", {
        identifier: dt.identifier,
        password: dt.password,
        redirect: false,
      });

      if (!res?.ok) {
        setInvalidCredentials(true);
        throw new Error(loginWithEmail ? "Invalid Email or Password" : "Invalid Username or Password");
      }

      console.log("Login Success!");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Login Failed!");
      console.error("--- Authentication Error Message ---", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-100">
      <section className="container mx-auto flex h-screen items-center justify-center p-5">
        <div className="relative flex w-full max-w-[300px] justify-center rounded-xl bg-white px-5 pb-5 pt-[60px] shadow-lg">
          <Link className={ExampleATWM({ className: "absolute left-5 top-5 font-semibold", color: "rose", size: "sm", variant: "ghost" })} href={"/"}>
            <FaChevronLeft className="ml-1" size={12} /> Home
          </Link>
          <form className="flex w-full max-w-64 flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <ExampleInput
              color="rose"
              disabled={loading}
              errorMessage={errors.identifier?.message}
              label={loginWithEmail ? "Email" : "Username"}
              type="text"
              {...register("identifier")}
            />

            <ExampleInput
              color="rose"
              disabled={loading}
              errorMessage={errors.password?.message}
              icon={passwordVisibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
              iconOnClick={() => setPasswordVisibility((prev) => !prev)}
              label="Password"
              type={passwordVisibility ? "text" : "password"}
              {...register("password")}
            />

            <span className="text-center text-sm text-red-600">
              {invalidCredentials && (loginWithEmail ? "Invalid Email or Password" : "Invalid Username or Password")}
            </span>

            <ExampleA className="font-semibold" color="rose" disabled={loading} size="sm" type="submit" variant="solid">
              {loading ? "Loading..." : "LOGIN"}
            </ExampleA>

            <div className="flex justify-center gap-1">
              <span className="text-xs">Don&apos;t have an account yet?</span>
              <Link
                className={ExampleATWM({ className: "text-xs", color: "rose", disabled: loading, size: "sm", variant: "ghost" })}
                href={"/register"}
                onClick={(e) => {
                  if (loading) {
                    e.preventDefault();
                  } else {
                    setPasswordVisibility(false);
                    setInvalidCredentials(false);
                    reset();
                  }
                }}
              >
                Register!
              </Link>
            </div>

            <div className="flex justify-center gap-1">
              <span className="text-xs">{loginWithEmail ? "Login with username?" : "Login with email?"}</span>
              <ExampleA
                className="text-xs"
                color="rose"
                disabled={loading}
                onClick={() => {
                  setPasswordVisibility(false);
                  setInvalidCredentials(false);
                  setLoginWithEmail((prev) => !prev);
                  reset();
                }}
                size="sm"
                type="button"
                variant="ghost"
              >
                Click here!
              </ExampleA>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
