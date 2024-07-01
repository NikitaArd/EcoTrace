import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './layout/Root';

import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <Home />},
      {path: 'learn-more', element: <LearnMore />}
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
