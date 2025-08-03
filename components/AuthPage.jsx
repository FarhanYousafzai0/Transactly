"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';

// The schema expects "email", but the form field below was using "username".
// This mismatch means errors for "email" will never show up.
// Fix: use "email" as the name in FormField.
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

const AuthPage = ({ type }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Transactly logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Transactly</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 font-semibold">
            {user ? "Linked Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user ? "Linked your account and get started" : "Please enter your details."}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-3">
          {/* Linked account content will go here */}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput name="email" form={form} label="Email" placeholder="Enter your email" type="email" />
            <CustomInput name="password" form={form} label="Password" placeholder="Enter your password" type="password" />
           <div className='flex flex-col w-full'>
           <Button type="submit" className="form-btn" disabled={isLoading}>{isLoading ? (<>Loading... <Loader2 className="size-4 animate-spin" /></>) : type === "sign-in" ? "Sign In" : "Sign Up"} </Button>
           </div>

            <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
          </form>
        </Form>
      )}
    </section>
  );
};

export default AuthPage;
