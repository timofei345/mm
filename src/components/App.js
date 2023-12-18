import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View

import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import SplashScreen from "./pages/public/splashScreen/SplashScreen";

import ErrorPage from "./pages/errors/ErrorPage";


import  "../scss/global.scss";
import Start from "./pages/public/Start/Start";
import Contact from "./pages/private/contact/Contact";
import Send from "./pages/private/send/Send";
import RequestMoney from "./pages/private/requestMoney/RequestMoney";
import SendMoney from "./pages/private/sendMoney/SendMoney";
import Transactions from "./pages/private/transactions/Transactions";
import Dashboard from "./pages/private/dashboard/Dashboard";
import ResetPassword from "./pages/private/resetpasswort/ResetPassword";
import EditProfile from "./pages/private/editProfile/EditProfile";
import Cards from "./pages/private/card/Card";
import AddCard from "./pages/private/card/AddCard";
import Setting from "./pages/private/settings/setting";
import Notify from './pages/private/notify/notify';

function App() {

  const publicPages = [
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <Start />,
      path: '/start'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/onboarding'
    },
    {
      element: <SplashScreen />,
      path: '/splashscreen'
    },
  ];

  const PrivatePages = [
    {
      element: <Dashboard />,
      path: '/'
    },
    {
      element: <Profile />,
      path: '/profile'
    },
    {
      element: <Transactions />,
      path: '/transactions'
    },
    {
      element: <Contact />,
      path: '/contact'
    },

    {
      element: <Send />,
      path: '/send'
    },
    {
      element: <RequestMoney />,
      path: '/requestmoney'
    },
    {
      element: <SendMoney />,
      path: '/sendmoney'
    },
    {
      element: <ResetPassword />,
      path: '/resetpassword'
    },
    {
      element: <EditProfile />,
      path: '/editprofile'
    },
    {
      element: <Cards />,
      path: '/cards'
    },
    {
      element: <AddCard />,
      path: '/addcard'
    },
    {
      element: <Setting />,
      path: '/setting'
    },
    {
      element: <Notify />,
      path: '/notify'
    }
  ];



  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
