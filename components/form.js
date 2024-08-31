// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { HiMail } from "react-icons/hi";

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "2acf3f71-cde9-46b0-b6ef-cd6ea9fe2713";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Third Bracket Solution",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700 sm:flex lg:mt-16">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Sign up to our newsletter
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0 items-center"
          noValidate
        >
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            
            </div> */}

            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="false"
              className={`block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500  ${
                errors.email
                  ? "border-red-600  ring-red-100 dark:ring-0"
                  : "border-gray-300  ring-gray-100 dark:border-gray-600  dark:ring-0"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600 ">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          <div className="items-center">
            <button
              type="submit"
              className="cursor-pointer rounded-r-lg border border-primary-600 bg-primary-600 px-5 py-3 text-center text-sm text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
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
            </button>
          </div>
        </form>
        <div>
          {isSubmitSuccessful && isSuccess && (
            <div className=" text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
