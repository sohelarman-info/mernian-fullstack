import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  let [loading, setLoading] = useState(false);
  let [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);
    let data = await axios.post(
      "http://127.0.0.1:8000/user/auth/forgotpassword",
      {
        email: values.email,
      }
    );

    console.log(data);

    setSuccessMsg("Reset Your Password. Please Check Email");
  };
  const onFinishFailed = (errorInfo) => {
    setSuccessMsg("Email Not Found");
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
          label="Your Exist Email"
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

export default ForgotPassword;
