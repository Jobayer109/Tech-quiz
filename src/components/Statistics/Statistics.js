import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../Main/Main';

const Statistics = () => {
    const quizz = useContext(QuizContext)
    return (
        <div className=' my-6 w-[50%] mx-auto h-auto py-12'>
           <BarChart width={630} height={300} data={quizz}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="total" fill="#82ca9d" />
</BarChart>
            
        </div>
    );
};

export default Statistics;