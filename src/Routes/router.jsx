import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Layout/Main';
import { Home } from '../Pages/Home/Home';
import { Course } from '../Pages/Course/Course';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/course-details', element: <Course /> },
    ],
  },
]);
