import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  // State
  let [loading, setLoading] = useState(false);
  let [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);
    let data = await axios.post(
      "http://127.0.0.1:8000/user/auth/ragistration",
      {
        name: values.username,
        email: values.email,
        password: values.password,
      },
      {
        headers: {
          Authorization: "3MwAN7UdsIAb9PM",
        },
      }
    );

    setSuccessMsg("Registration Successfully. Please check your email for OTP");
    setTimeout(() => {
      navigate(`/otpverification/${values.email}`);
    }, 1000);
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationPage;
