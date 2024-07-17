import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './layout/Root';

import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Quiz from "./pages/Quiz";
import Total from "./pages/Total";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <Home />},
      {path: 'learn-more', element: <LearnMore />},
      {path: 'quiz', element: <Quiz />},
      {path: 'total', element: <Total />}
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
