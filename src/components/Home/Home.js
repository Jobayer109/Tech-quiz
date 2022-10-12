import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="dark:bg-black dark:text-gray-100 ">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-16 xl:max-w-3xl">
        <h1 className="text-2xl font-bold leading-none sm:text-4xl">
          Filter Your
          <span className="dark:text-violet-400"> Tech Knowledge</span> with informative Quiz.
        </h1>
        <p className="px-8 mt-6 mb-6 text-sm">
          Mistake is not mean failure. its means learning. make mistakes and keep learning.!
        </p>
        <div className="flex flex-wrap justify-center">
          <Link to='/topics'>
          <button className="px-8 py-2 m-2 text-lg font-semibol bg-purple-600 rounded-lg hover:rounded-lg hover:bg-purple-900">
            Get Started
          </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
