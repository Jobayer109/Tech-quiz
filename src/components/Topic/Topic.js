import React from "react";

const Topic = ({ quiz }) => {
  const { logo, name, total } = quiz;
  return (
    <div className="border border-1 border-purple-600 rounded-lg flex items-center p-2">
      <img className="w-44 h-44 rounded-md border border-purple-400" src={logo} alt="" />
      <div className="text-purple-500 w-[80%] mx-auto">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="font-medium">
          Questions: <span className="text-white text-lg font semibold">{total}</span>
        </p>
        <button className="btn btn-sm btn-outline text-white bg-purple-500 mt-6 w-3/5">Start Quiz</button>
      </div>
    </div>
  );
};

export default Topic;
