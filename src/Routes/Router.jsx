import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Search from "../Component/Search";
import DashboardLayout from "../Layout/DashboardLayout";
import MyDonationReq from "../Pages/DashBoardPages/MyDonationReq";
import ProfilePage from "../Pages/DashBoardPages/ProfilePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "search",
        element: <Search></Search>
      }
    ],
  },
  // Dashboard layout
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
     {
       path: 'myDonationReq',
       element: <MyDonationReq></MyDonationReq>
      },{
        path: '/dashboard',
        element: <ProfilePage></ProfilePage>
      }
    ]
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