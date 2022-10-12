import { CheckCircleIcon, EyeIcon } from '@heroicons/react/24/solid';
import React from "react";
import { toast } from 'react-toastify';
import "./QuizItem.css";


const QuizItem = ({ quiz}) => {
  const { question, correctAnswer, options } = quiz;
  console.log(quiz)
    
  const correctionEye = (correctAnswer) => {
    options.map(option => {
      console.log(option);
      if (option === correctAnswer ?
        toast.success(correctAnswer, { autoClose: 3000 }) :
        toast.error(" Ops, Wrong answer", {autoClose:1500})) {
        
      } 
    })
    }


   
  return (
    <div>
      <div className="rounded-lg w-[60%] mx-auto m-8 bg-purple-500 p-4">
        <div className="flex justify-end mr-5">
          <EyeIcon className="h-8 w-8 text-white mr-0" />
        </div>
        <div className="flex w-[90%] mx-auto justify-around items-center py-4 bg-black rounded-xl p-3 text-yellow-200 text-2xl">
          <h2 className="">{question.replace( /(<([^>]+)>)/ig, '')}</h2>
        </div>
        <div className="grid grid-cols-2 text-white font-mono font-semibold">
          {
            options.map(option => 

              <div  onClick={() => correctionEye(correctAnswer)} className="rounded-lg bg-gray-700 hover:bg-black w-[80%] h-auto mx-auto flex items-center px-2 py-4 my-3">
              <CheckCircleIcon className="h-3 w-3 text-yellow-500  mr-0" />
              <button className="pl-6 text-lg transform duration-500 ease-out">
                {option}
              </button>
            </div>



              )
        }
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
