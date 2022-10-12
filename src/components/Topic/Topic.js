import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from "react";
import { Link } from 'react-router-dom';

const Topic = ({ quiz }) => {
  const { id, logo, name, total } = quiz;
  return (
    <div className="border border-1 border-purple-600 rounded-lg flex items-center p-2">
      <img className="w-44 h-44 rounded-md border border-purple-400" src={logo} alt="" />
      <div className="text-purple-400 w-[80%] mx-auto">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="font-medium mt-2">
          Questions: <span className="text-white text-md font semibold">{total}</span>
              </p>
              

              <Link to={`/topic/${id}`}><button className="btn btn-md btn-outline text-white border-0 bg-purple-500 mt-6 w-3/5 hover:bg-black hover:border">
                  Start Quiz
                  <ArrowRightIcon className="h-6 w-6 ml-2 text-white"/></button></Link>
      </div>
    </div>
  );
};

export default Topic;
