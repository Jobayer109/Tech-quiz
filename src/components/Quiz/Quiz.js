import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
    const quizz = useLoaderData()
 
    const submit = () => {
    toast.success("Congratulations.!!", {autoClose:1000})
}



    return (
        <div>
            <hr />
            <h1 className='text-white text-4xl font-bold pt-6 text-center'> Quiz <span className='text-xl'>of</span> <span className='font-bold text-4xl text-yellow-300 '>
                {quizz.data.name}</span></h1>
            <div className=''>
            {
                    (quizz.data.questions).map(quiz => 
                        <QuizItem
                            key={quiz.id}
                            quiz={quiz}
                        
                       ></QuizItem>                  
                        )
            }

                <div className='text-center'>
                <Link to='/topics'>
                    <button onClick={submit} className='btn btn-success mt-6 mb-10 w-96 font-bold text-black text-xl mx-auto'>
                        Submit
                    </button>
                </Link>
                </div>
        </div>
        </div>
    );
};

export default Quiz;