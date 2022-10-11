import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const QuizContext = React.createContext([])
const Main = () => {
    const quizz = useLoaderData()

   
    return (
        <QuizContext.Provider value={quizz.data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
       </QuizContext.Provider>
        
    );
};

export default Main;