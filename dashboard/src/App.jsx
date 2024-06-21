import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import OtpVerification from "./pages/OtpVerification";
import RegistrationPage from "./pages/RegistrationPage";
import TaskListPage from "./pages/TaskListPage";
import LoginPage from "./pages/LoginPage";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Dashboard from "./pages/Dashboard";
import AddCategory from "./pages/AddCategory";
import AddSubCategory from "./pages/AddSubCategory";
import ViewCategory from "./pages/ViewCategory";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />

        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword/:token" element={<NewPassword />} />
        <Route path="/otpverification/:email" element={<OtpVerification />} />
        <Route
          path="/emailVerification/:token"
          element={<EmailVerification />}
        />
        <Route path="/tasklist" element={<TaskListPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="viewcategory" element={<ViewCategory />} />
          <Route path="addsubcategory" element={<AddSubCategory />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
