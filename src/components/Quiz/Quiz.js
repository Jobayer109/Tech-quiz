import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizz = useLoaderData()
    console.log(quizz.data.name)
    return (
        <div>
            <h1 className='text-white text-xl font-semibold'> Quiz of <span className='font-bold text-4xl text-yellow-300'>
                {quizz.data.name}</span></h1>
            <div className=''>
            {
                (quizz.data.questions).map(quiz => <QuizDetails
                    
                    key={quiz.id}
                    quiz={quiz}
                
                ></QuizDetails>)
            }

                <Link to='/topics'><button className='btn btn-secondary w-1/4 font-bold text-black text-xl'>Submit</button></Link>
        </div>
        </div>
    );
};

export default Quiz;