
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
import MyLearning from './pages/MyLearning';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Learning from './pages/Learning';
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



  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
