// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
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
      from_name: "Acme Inc",
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
      <div className="mx-auto mb-8 max-w-screen-xl items-center justify-between rounded-lg bg-gray-50 p-6 dark:bg-gray-700/20 sm:flex lg:mb-16 lg:my-10">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 ">
          Sign up to our newsletter
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          // className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0"
        >
          {/* <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input> */}
          <div
            //className="relative w-full"

            className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0"
          >
            <label
              htmlFor="email-subscribe"
              className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
            >
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
              required
              // className={`block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-500 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-slate-500 dark:focus:ring-slate-500  ${
              //   errors.email
              //     ? ""
              //     : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              // }`}
              className="w-full 
              [&_input]:rounded-r-none 
              [&_input]:py-3"
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {/* {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )} */}
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-r-lg border border-gray-700 bg-gray-800 px-5 py-3 text-center text-sm text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-700 dark:border-gray-300 dark:text-gray-900
              "
            // className="py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
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
        </form>
      </div>

      {isSubmitSuccessful && isSuccess && (
        <div className="text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className=" text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
