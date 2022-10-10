import React from "react";
import logo from '../../Resources/Images/logo.png';

const Footer = () => {
  return (
    <footer className="px-20 py-16 bg-black dark:text-gray-500 ">
      < hr className="pt-8 w-full" />
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full border border-white">
           <img src={logo} alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="/">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="/">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="/">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="/">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <p>@ All right reserved 2022</p>
    </footer>
  );
};

export default Footer;
