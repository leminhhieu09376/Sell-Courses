
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage'
import CourseItemDes from './pages/CourseItemDes'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword';
import HomePageUser from './pages/HomePageUser';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />
    },
    {
      path: "/home",
      element: <HomePageUser />
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
