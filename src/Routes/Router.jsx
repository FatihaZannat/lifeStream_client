import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Search from "../Component/Search";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: "search",
          element: <Search></Search>
        }
      ],
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ]);

  export default router