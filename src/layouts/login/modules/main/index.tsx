"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { ExampleA } from "@/src/components/interfaces/example/A";
import { ExampleLoginSchema, TExampleLoginSchema } from "@/src/schemas/example";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TExampleLoginSchema>({
    defaultValues: { password: "", username: "" },
    resolver: zodResolver(ExampleLoginSchema),
  });

  const onSubmit: SubmitHandler<TExampleLoginSchema> = async (dt) => {
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
        <label className="flex flex-col gap-1">
          Username
          <input className="rounded-md border p-2" type="text" {...register("username")} />
          {errors.username && <span className="text-xs text-red-600">{errors.username.message}</span>}
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input className="rounded-md border p-2" type="password" {...register("password")} />
          {errors.password && <span className="text-xs text-red-600">{errors.password.message}</span>}
        </label>

        <span className="text-center text-sm text-red-600"> {invalidCredentials && "Invalid Username or Password"}</span>

        <ExampleA className={loading ? "cursor-not-allowed" : ""} color="rose" disabled={loading} size="sm" type="submit" variant="solid">
          {loading ? "Loading..." : "Login"}
        </ExampleA>
      </form>
    </main>
  );
};
