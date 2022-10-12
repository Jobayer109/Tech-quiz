import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./QuizItem.css";


const QuizItem = ({ quiz}) => {
  const { question, correctAnswer, options } = quiz;

  const {count, setCount}=useState(0)
    
  const handleCorrection = (correctAnswer) => {
    options.map(option => {
      console.log(option);
      if (option === correctAnswer ?
        toast.success(correctAnswer, { autoClose: 3000 }) : " ") {  
        } 
        // setCount(count+1)
    })

   
    }


   
  return (
    <div>
      <div className="rounded-lg w-[60%] mx-auto m-8 bg-purple-500 p-4">
        <div className="flex justify-end mr-5">
          <EyeIcon onClick={()=>handleCorrection(correctAnswer)} className="h-8 w-8 text-white mr-0" />
        </div>
        <div className="flex w-[90%] mx-auto justify-around items-center py-4 bg-black rounded-xl p-3 text-yellow-200 text-2xl">
          <h2 className="">{question.replace( /(<([^>]+)>)/ig, '')}</h2>
        </div>
        <div className="grid grid-cols-2 text-white font-mono font-semibold">
          {
            options.map(option => 

              <div  onClick={() => handleCorrection(correctAnswer)} className="rounded-lg bg-gray-700 hover:bg-black w-[80%] h-auto mx-auto flex items-center px-2 py-4 my-3">
                <div>
                  <input className='h-6 w-6' type="radio" />  
             <button className="pl-6 text-lg">
                {option}
              </button>
              </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
