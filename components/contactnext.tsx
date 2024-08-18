export default function ContactForm() {
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2acf3f71-cde9-46b0-b6ef-cd6ea9fe2713");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0"
      >
        <div className="relative w-full">
          <input
            type="hidden"
            name="from_name"
            value="Third Bracket Solutions"
          />
          <input
            type="hidden"
            name="subject"
            value="New Submission from Third Bracket"
          />

          <label
            htmlFor="email-subscribe"
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

          <input
            type="email"
            name="email"
            id="email-subscribe"
            className="block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-500 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
            placeholder="Your email"
            required
          />
        </div>
        {/* <textarea name="message"></textarea> */}
        <button
          type="submit"
          className="cursor-pointer rounded-r-lg border border-gray-700 bg-gray-800 px-5 py-3 text-center text-sm text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-700 dark:border-gray-300 dark:text-gray-900
              "
        >
          Subscribe
        </button>
        <div id="result" />
      </form>
    </>
  );
}
