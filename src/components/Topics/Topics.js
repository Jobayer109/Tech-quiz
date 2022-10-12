import React, { useContext } from 'react';
import { QuizContext } from '../../Main/Main';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizz = useContext(QuizContext)

   
    return (
        <div className=' sm:grid grid-cols-2  gap-10 p-10 w-[80%] mx-auto h-4/5 bg-black'>
            {
                quizz.map(quiz => <Topic
                    key={quiz.id}
                    quiz={quiz}
                ></Topic>)
            }
            
        </div>
    );
};

export default Topics;