import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {
    const quizz = useLoaderData()
    console.log(quizz.data.questions);


    return (
        <div>
            <h1 className='text-white text-4xl font-bold'> Quiz <span className='text-xl'>of</span> <span className='font-bold text-4xl text-yellow-300'>
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

                <Link to='/topics'>
                    <button className='btn btn-secondary w-1/4 font-bold text-black text-xl'>
                        Submit
                    </button>
                </Link>
        </div>
        </div>
    );
};

export default Quiz;