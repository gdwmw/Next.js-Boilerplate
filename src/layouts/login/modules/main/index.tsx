"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { ExampleA } from "@/src/components/interfaces/example/A";
import { ExampleInput } from "@/src/components/interfaces/example/C";
import { LoginSchema, TLoginSchema } from "@/src/schemas/auth";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TLoginSchema>({
    defaultValues: { password: "", username: "" },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (dt) => {
    setLoading(true);
    setInvalidCredentials(false);

    try {
      const res = await signIn("credentials", {
        password: dt.password,
        redirect: false,
        username: dt.username,
      });

      if (!res?.ok) {
        setLoading(false);
        setInvalidCredentials(true);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <ExampleInput
          color="rose"
          disabled={loading}
          errorMessage={errors.username?.message}
          label="Username"
          type="text"
          {...register("username")}
        />

        <ExampleInput
          color="rose"
          disabled={loading}
          errorMessage={errors.password?.message}
          icon={visibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
          iconOnClick={() => setVisibility((prev) => !prev)}
          label="Password"
          type={visibility ? "text" : "password"}
          {...register("password")}
        />

        <span className="text-center text-sm text-red-600"> {invalidCredentials && "Invalid Username or Password"}</span>

        <ExampleA className={loading ? "cursor-not-allowed" : ""} color="rose" disabled={loading} size="sm" type="submit" variant="solid">
          {loading ? "Loading..." : "Login"}
        </ExampleA>
      </form>
    </main>
  );
};
