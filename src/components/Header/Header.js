import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../Resources/Images/logo.png';


const Header = () => {
  return (
    <header className="p-2 bg-black text-gray-100 shadow-xl px-20">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img className="h-24 w-24 " src={logo} alt="" />
          <h2 className="font-bold text-2xl">Tech Quiz</h2>
        </NavLink>


        <ul className="items-stretch hidden space-x-3 md:flex font-semibold text-md text-purple-400">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent  hover:text-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/topics"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent  hover:text-white"
            >
              Topics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/statistics"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent  hover:text-white"
            >
              Statistics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/blogs"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent  hover:text-white"
            >
              Blogs
            </NavLink>
            <NavLink
              rel="noopener noreferrer"
              to="/about"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent  hover:text-white"
            >
              About
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
        </header>
  );
};

export default Header;
