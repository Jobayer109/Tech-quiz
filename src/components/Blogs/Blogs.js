import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-4xl font-bold">Blogs</h3>
              <hr className="w-24 my-2" />
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-2xl font-semibold tracking-wide text-purple-300">
                  What is the purpose of using react router ?{" "}
                </h3>

                <p className="mt-3 text-xl">
                  <span className="text-xl font-semibold text-purple-500">Answer: </span>
                  React Router is a standard library for routing in React. It enables the navigation
                  among views of various components in a React Application, allows changing the
                  browser URL, and keeps the UI in sync with the URL.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-2xl font-semibold tracking-wide text-purple-300">
                  How does work context API ?
                </h3>
                <p className="mt-3 text-xl">
                  <span className="text-xl font-semibold text-purple-500">Answer: </span>
                  The React Context API is a way for a React app to effectively produce global
                  variables that can be passed around. This is the alternative to "prop drilling" or
                  moving props from grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management using Redux.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-2xl font-semibold tracking-wide text-purple-300">What is useRef ?</h3>
                <p className="mt-3 text-xl">
                  <span className="text-xl font-semibold text-purple-400">Answer: </span>
                  The useRef Hook allows you to persist values between renders. It can be used to
                  store a mutable value that does not cause a re-render when updated. It can be used
                  to access a DOM element directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
