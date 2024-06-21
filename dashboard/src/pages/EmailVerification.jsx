import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EmailVerification = () => {
  let [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  let param = useParams();
  useEffect(() => {
    async function verify() {
      let data = await axios.post(
        "http://127.0.0.1:8000/user/auth/emailverification",
        {
          token: param.token,
        }
      );
      console.log(data);
      navigate("/login");
    }
    verify();
  }, []);

  return <div>Loading...</div>;
};

export default EmailVerification;
