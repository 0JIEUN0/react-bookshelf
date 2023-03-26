import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from './components/views/RegisterPage/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
