import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../Main/Main';

const Statistics = () => {
    const quizz = useContext(QuizContext)
    console.log(quizz)
    return (
        <div className=' my-6 w-[65%] mx-auto'>
           <BarChart width={930} height={500} data={quizz}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#8884d8" />
</BarChart>
            
        </div>
    );
};

export default Statistics;