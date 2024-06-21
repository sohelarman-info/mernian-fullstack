import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // State
  let [loading, setLoading] = useState(false);
  let [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    let data = await axios.post("http://127.0.0.1:8000/user/auth/login", {
      email: values.email,
      password: values.password,
    });

    console.log(data);

    setSuccessMsg("Login Successfully.");
    // navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {successMsg && (
        <Alert message={successMsg} type="success" showIcon closable />
      )}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Submit
          </Button>

          <div>
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
