import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import { quizDetailsFunc, quizLoaderFunc } from './Loader/quizLoader';
import Main from './Main/Main';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: quizLoaderFunc,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'Topics',
          element: <Topics></Topics>
        },
        {
          path: '/topic/:quizId',
          loader: quizDetailsFunc,           
          element: <Quiz></Quiz>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },         
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])
 

  return (
    <div className="App bg-black">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
