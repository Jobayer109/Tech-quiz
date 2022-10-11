import { CheckCircleIcon, EyeIcon } from '@heroicons/react/24/solid';
import React from "react";

const QuizDetails = ({ quiz }) => {
  const { options, id, question, correctAnswer } = quiz;


  



  return (
      <div>
           <div className="border rounded-lg w-[60%] mx-auto m-8 bg-purple-500 p-4">
          <div className='flex justify-end mr-5'>
          <EyeIcon className="h-8 w-8 text-white mr-0"/>
              </div>
            <div className='flex w-[90%] mx-auto justify-around items-center py-4 bg-black rounded-xl p-3 text-yellow-200 text-xl'>
              <h2 className=''>{question}</h2>
          </div>
          <div  className='grid grid-cols-2 text-white'>
              {options.map(option =>
                  <div className='rounded-lg bg-gray-700 hover:bg-black w-[80%] h-auto mx-auto flex items-center px-2 py-4 my-3'>      
                      <CheckCircleIcon className="h-3 w-3 text-yellow-500 mr-0" />
                      <div className='pl-6 text-lg'>
                      {option}
                      </div>
              </div> )}
          </div>
    </div>
  
   </div>
  );
};

export default QuizDetails;
