// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Co() {
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
    <section className="mx-auto justify-center self-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 flex flex-row justify-center"
      >
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        {/* <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="false"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0 "
            }`}
            {...register("name", {
              required: "Full name is required",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div> */}

        <div className="mb-5 ">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={` h-fit px-4 py-3 items-center placeholder:text-gray-800 dark:text-white  outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-inset    focus:ring-2 rounded-l-lg ${
              errors.email
                ? "border-red-600 focus:border-red-600  "
                : "border-black focus:border-gray-600  dark:border-white dark:focus:border-white "
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
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className=" px-4 py-3 h-fit items-center justify-center font-semibold text-white transition-colors bg-gray-900 rounded-r-lg hover:bg-gray-800 focus:outline-none  focus:ring-2 border  border-black dark:border-white focus:ring-gray-200  dark:bg-white dark:text-black  "
        >
          {isSubmitting ? (
            <svg
              className="w-5  mx-auto text-white dark:text-black animate-spin"
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
            "Get In"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </section>
  );
}
