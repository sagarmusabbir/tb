"use client";
import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Label } from "flowbite-react";

export default function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-sm lg:ml-auto"
      >
        <div className="relative w-full">
          <Label
            htmlFor="email"
            className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </Label>
          <label
            htmlFor="email"
            className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          {/* <input type="text" {...register("name", { required: true })} /> */}
          <input
            className="block w-full rounded-l-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 focus:border-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 "
            placeholder="Your email"
            type="email"
            {...register("email", { required: true })}
          />
          {/* <textarea {...register("message", { required: true })}></textarea> */}
        </div>

        <button
          className="cursor-pointer rounded-r-lg border border-primary-600 bg-primary-600 px-5 py-3 text-center text-sm text-white hover:bg-primary-700 focus:ring-0  dark:bg-primary-600 dark:hover:bg-primary-700 "
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
        </button>
      </form>

      <div className=" text-emerald-500 dark:text-emerald-400 text-sm w-full max-w-sm lg:ml-auto mt-2 text-left">
        {result}
      </div>
    </div>
  );
}
