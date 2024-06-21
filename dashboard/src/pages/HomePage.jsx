import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>This is deshboard Home Page</div>
      <div>
        <Link to="/registration">Registration</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/forgotpassword">Forgot Password</Link>
      </div>
      <div>
        <Link to="/newpassword">New Password</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default HomePage;
