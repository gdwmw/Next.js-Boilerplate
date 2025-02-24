"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleA, ExampleATWM, ExampleInput, FormContainer } from "@/src/components";
import { LoginSchema, TLoginSchema } from "@/src/schemas";

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
      reset();
    } catch (error) {
      console.log("Login Failed!");
      console.error("--- Authentication Error Message ---", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-100">
      <FormContainer href={"/"} innerContainerClassName="w-full max-w-[300px]" label={"Home"}>
        <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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
              href={"/authentication/register"}
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
      </FormContainer>
    </main>
  );
};
