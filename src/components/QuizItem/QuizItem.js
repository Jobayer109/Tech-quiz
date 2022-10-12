import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import "./QuizItem.css";


const QuizItem = ({ quiz}) => {
  const { question, correctAnswer, options } = quiz;
  console.log(quiz)

   
  const handleCorrection = () => {
    options.map(option => {
    
      if (option === correctAnswer) { 
        toast.success(correctAnswer, { autoClose: 3000 })
      } else {
        toast.error('Wrong Answer', {autoClose:500})
      }
      })  
    }
  const handleCorrectAnswer = () => {
    options.map(option => {
    
      if (option === correctAnswer ? toast.success(correctAnswer, { autoClose: 4000 }):" ") { 
        
      } 
      })  
    }
   
  return (
    <div>
      <div className="rounded-lg w-[60%] bg-gray-900 mx-auto py-auto m-8 p-8 border border-x-0">
        <div className="flex justify-end">
          <EyeIcon onClick={()=>handleCorrectAnswer(correctAnswer)} className="h-8 w-8 text-white mr-0" />
        </div>
        <div className="flex w-[90%] mx-auto justify-around items-center py-3 bg-black rounded-xl p-3 text-yellow-200 text-xl"> 
          <h2 className="">{question.replace( /(<([^>]+)>)/ig, '')}</h2>
        </div>
        <div className="grid grid-cols-2 text-white font-semibold">
          {
            options.map(option => 

              <div  onClick={() => handleCorrection(options)} className="rounded-lg bg-purple-500 hover:bg-black w-[90%] h-auto mx-auto flex items-center px-2 py-2 my-3 border">
                <div>
                  <input className='h-4 w-4' type="radio" />  
             <button className="pl-6 text-md">
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
