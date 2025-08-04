"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";


import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";
import { toast } from "sonner";
import { getAuthFormSchema } from "@/lib/utils";
import { SignIn, SignUp } from "@/app/actions/user.action";

const AuthPage = ({ type }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


const formSchema = getAuthFormSchema(type);

  const form = useForm({
        resolver: zodResolver(formSchema), // ← schema based on type
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (type === "sign-in") {
     
        const response = await SignIn({
          email: values.email,
          password: values.password,
        });

        if(response) router.push('/')
        toast.success("Successfully signed in", {
          description: `Welcome back!`,
        });
      } else {
       
        const response = await SignUp({
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        });

        toast.success("Account created successfully", {
          description: `Welcome ${values.firstName}!`,
        });
      }

      setUser({
        email: values.email,
        name: `${values.firstName} ${values.lastName}`,
      });
    } catch (error) {
      toast.error("Error", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <header className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt="Transactly logo" />
            <h1 className="text-2xl font-bold text-gray-900">Transactly</h1>
          </Link>

          <div>
            <h1 className="text-2xl font-semibold">
              {user ? "Linked Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            </h1>
            <p className="text-sm text-gray-600">
              {user ? "Linked your account and get started" : "Please enter your details."}
            </p>
          </div>
        </header>

        {user ? (
          <div className="space-y-3 rounded bg-gray-100 p-4 text-gray-700">
            <p>Welcome, {user.name}!</p>
            <p className="text-sm">You are now signed in as {user.email}</p>
            <Button onClick={() => setUser(null)} variant="outline" className="mt-4">
              Sign Out
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {type === "sign-in" ? (
                <>
                  <CustomInput name="email" form={form} label="Email" placeholder="Enter your email" type="email" />
                  <CustomInput name="password" form={form} label="Password" placeholder="Enter your password" type="password" />
                </>
              ) : (
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput name="firstName" form={form} label="First Name" type="text" />
                    <CustomInput name="lastName" form={form} label="Last Name" type="text" />
                  </div>
                  <CustomInput name="email" form={form} label="Email" type="email" />
                  <CustomInput name="password" form={form} label="Password" type="password" />
                  <CustomInput name="address" form={form} label="Address" type="text" />
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput name="state" form={form} label="State" type="text" />
                    <CustomInput name="postalCode" form={form} label="Postal Code" type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput name="dateOfBirth" form={form} label="Date of Birth" type="date" />
                    <CustomInput name="ssn" form={form} label="SSN" type="text" description="Last 4 digits only" />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Button type="submit" className="w-full form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait...
                    </>
                  ) : type === "sign-in" ? "Sign In" : "Sign Up"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full" disabled={isLoading}>
                  <Image src="/icons/google.svg" width={20} height={20} alt="Google logo" className="mr-2" />
                  Google
                </Button>
              </div>

              <footer className="flex justify-center gap-1 text-sm">
                <p className="text-gray-600">
                  {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="text-blue-600 hover:underline">
                  {type === "sign-in" ? "Sign up" : "Sign in"}
                </Link>
              </footer>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default AuthPage;
