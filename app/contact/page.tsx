"use client";

import { useFormState } from "react-dom";
import { submitForm } from "../../components/action";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [result, formAction, form] = useFormState(submitForm, null);

  const {
    formState: { isSubmitting },
  } = useForm({
    defaultValues: async () => await fetch("/api"),
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <form action={formAction}>
          <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
            <input
              type="hidden"
              name="access_key"
              value="2acf3f71-cde9-46b0-b6ef-cd6ea9fe2713"
            />

            {/* <input type="email" name="email" required /> */}

            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <div className="flex w-full">
              <TextInput
                icon={() => (
                  <HiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full [&_input]:rounded-r-none [&_input]:py-3"
              ></TextInput>

              {/* <button type="submit">Submit Form</button> */}

              <Button type="submit" className="rounded-l-none [&>span]:px-5">
                <Spinner
                  role="status"
                  aria-label="Spinner button example"
                  size="sm"
                />
                <span className="pl-3"> Subscribe...</span>
              </Button>
            </div>
          </div>
        </form>

        <span>{result?.message}</span>
      </div>
    </div>
  );
}
