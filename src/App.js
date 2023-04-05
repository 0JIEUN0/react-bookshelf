import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';


function App() {

  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLandingPage />
    },
    {
      path: "/login",
      element: <AuthLoginPage />
    },
    {
      path: "/register",
      element: <AuthRegisterPage />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
