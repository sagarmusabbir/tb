"use client";
import { useState, useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import useWeb3Forms from "@web3forms/react";
import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";

export function NewsletterSection() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const accessKey = "4175b93d-cf99-4a6b-9bd1-37fef29a02b2";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  return (
    // <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="items-center justify-between gap-16 rounded-lg bg-gray-900 p-6 text-white dark:bg-gray-800 md:p-12 lg:flex lg:gap-24">
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sign up for our newsletter
          </h2>
        </div>
        <div className="mt-6 w-full lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 items-center space-y-4 sm:flex sm:space-y-0">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="flex w-full">
                <TextInput
                  color="gray"
                  theme={{
                    field: {
                      input: {
                        colors: {
                          gray: " bg-gray-800 text-white focus:border-primary-600 focus:ring-primary-600/50 border-primary-600 placeholder-slate-50 dark:bg-gray-700   ",
                        },
                      },
                    },
                  }}
                  icon={() => (
                    <HiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full [&_input]:rounded-r-none [&_input]:py-3"
                />
                <Button
                  color="green"
                  theme={{
                    color: {
                      green:
                        "border border-primary-600 bg-primary-600  text-white focus:ring-2 focus:ring-primary-700 enabled:hover:bg-primary-700 enabled:hover:border-primary-700 ",
                    },
                  }}
                  className="rounded-l-none [&>span]:px-5"
                  type="submit"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
            </div>
            <div className=" text-primary-200  text-sm w-full max-w-sm lg:ml-auto  text-left">
              {result}
            </div>
            {/* <div className="text-left text-sm text-gray-400 dark:text-gray-300">
              We care about the protection of your data.&nbsp;
              <a href="#" className="font-medium text-white hover:underline">
                Read our Privacy Policy
              </a>
              .
            </div> */}
          </form>
        </div>
      </div>
    </div>
    // </section>
  );
}
