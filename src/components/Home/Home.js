import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Filter your
          <span className="dark:text-violet-400"> Tech Knowledge</span> with us.
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Mistake is not mean failure. its means learning. make mistakes and keep learning.!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibol bg-purple-600 rounded-lg hover:rounded-lg hover:bg-purple-900">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
