
import './App.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import CourseItemDes from './pages/CourseItemDes'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword';
import HomePageUser from './pages/HomePageUser';
import MyLearning from './pages/MyLearning';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Learning from './pages/Learning';
import ExploreCourse from './pages/ExploreCourse';
import ResetPassword from './pages/ResetPassword';
import ChangePassword from './pages/ChangePassword';
import Courses from './pages/teacher/Courses'
import CreateCourse from './pages/teacher/CreateCourse';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageUser />
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
      path: "/courseItem/:id",
      element: <CourseItemDes />
    },
    {
      path: "/my-learning",
      element: <MyLearning />
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCart />
    },
    {
      path: "/check-out",
      element: <Checkout />
    },
    {
      path: "/learning/:id",
      element: <Learning />
    },
    {
      path: "/all-course/:id",
      element: <ExploreCourse />
    },
    {
      path: "/reset-pass",
      element: <ResetPassword />
    },
    {
      path: "/changepassword",
      element: <ChangePassword />
    },
    {
      path: "/teacher/courses",
      element: <Courses />
    },
    {
      path: "/teacher/create-course",
      element: <CreateCourse />
    },





  ]);
  return (

    <div className='App'>
      <RouterProvider router={router} />
    </div>




  )
}

export default App
