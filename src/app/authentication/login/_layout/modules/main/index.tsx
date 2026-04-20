"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftRight, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, ReactElement, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ExampleATWM, ExampleInput, FormContainer, SubmitButton } from "@/src/components";
import { deleteCookie, getCookie } from "@/src/utils";

import { LoginSchema, TLoginSchema } from "./schema";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setTransition] = useTransition();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema(loginWithEmail ? "Email" : "Username")),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = (dt) => {
    setTransition(async () => {
      setErrorMessage("");

      try {
        const res = await signIn("credentials", {
          identifier: dt.identifier,
          password: dt.password,
          redirect: false,
        });

        const reportResponse = await getCookie("report");
        let report: boolean[] = [];
        if (reportResponse?.value) {
          report = JSON.parse(reportResponse?.value);
        }

        if (!res?.ok) {
          if (report?.[0] === false) {
            setErrorMessage("Your Account Has Not Been Confirmed");
            throw new Error("Your Account Has Not Been Confirmed");
          } else if (report?.[1] === true) {
            setErrorMessage("Your Account Has Been Blocked");
            throw new Error("Your Account Has Been Blocked");
          } else {
            setErrorMessage(loginWithEmail ? "Invalid Email Or Password" : "Invalid Username Or Password");
            throw new Error(loginWithEmail ? "Invalid Email Or Password" : "Invalid Username Or Password");
          }
        }

        await deleteCookie("report");
        console.info("Login Success!");
        router.push("/");
        router.refresh();
        reset();
      } catch (error) {
        console.warn("Login Failed!");
        console.error("--- Authentication Error Message ---", error);
      }
    });
  };

  return (
    <main>
      <FormContainer className={{ innerContainer: "max-w-[300px]" }} href={"/"} label={"Home"}>
        <form className="flex w-full flex-col gap-3 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <ExampleInput
            color="default"
            disabled={loading}
            errorMessage={errors.identifier?.message}
            icon={<ArrowLeftRight size={18} />}
            iconOnClick={() => {
              setPasswordVisibility(false);
              setErrorMessage("");
              setLoginWithEmail((prev) => !prev);
              reset();
            }}
            label={loginWithEmail ? "Email" : "Username"}
            type="text"
            {...register("identifier")}
          />

          <ExampleInput
            color="default"
            disabled={loading}
            errorMessage={errors.password?.message}
            icon={passwordVisibility ? <Eye size={18} /> : <EyeOff size={18} />}
            iconOnClick={() => setPasswordVisibility((prev) => !prev)}
            label="Password"
            type={passwordVisibility ? "text" : "password"}
            {...register("password")}
          />

          <span className="text-center text-xs text-red-600">{errorMessage}</span>

          <SubmitButton color="black" disabled={loading} label="LOGIN" size="sm" variant="solid" />

          <div className="mx-auto text-center">
            <span className="text-xs">Don&apos;t have an account yet? </span>
            <Link
              className={ExampleATWM({ className: "inline text-xs", color: "blue", disabled: loading, size: "sm", variant: "ghost" })}
              href={"/authentication/register"}
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
              Register!
            </Link>
          </div>
        </form>
      </FormContainer>
    </main>
  );
};
