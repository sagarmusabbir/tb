import Contact from "../app/contact";

export default function Newsletter() {
  return (
    <>
      <div className="mx-auto mb-8 max-w-screen-xl items-center justify-between rounded-lg bg-gray-50 p-6 dark:bg-gray-700/20 sm:flex lg:mb-16 lg:my-10">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 ">
          Sign up to our newsletter
        </p>
        <Contact />
      </div>
    </>
  );
}
