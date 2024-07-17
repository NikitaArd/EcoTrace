import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './layout/Root';

import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Quiz from "./pages/Quiz";
import Total from "./pages/Total";
import RootLayoutWithHomeButton from "./layout/RootWithHomeButton";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <Home />},
      {path: 'quiz', element: <Quiz />},
    ],
  },
  {
    path: '/total',
    element: <RootLayoutWithHomeButton />,
    children: [
      {index: true, element: <Total />}
    ]
  },
  {
    path: '/learn-more',
    element: <RootLayoutWithHomeButton />,
    children: [
      {index: true, element: <LearnMore />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
