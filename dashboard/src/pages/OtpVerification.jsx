import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OtpVerification = () => {
  // state

  let [loading, setLoading] = useState(false);
  let [successMsg, setSuccessMsg] = useState("");
  let navigate = useNavigate();
  const [form] = Form.useForm();

  let param = useParams();

  const onFinish = async (values) => {
    setLoading(true);
    console.log("Success:", values);

    let data = await axios.post(
      "http://127.0.0.1:8000/user/auth/otpverification",
      {
        email: param.email,
        otp: values.otp,
      }
    );

    setSuccessMsg("Registration Successfully");
    form.resetFields();
    setTimeout(() => {
      navigate("/");
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
        form={form}
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
          label="OTP"
          name="otp"
          rules={[
            {
              required: true,
              message: "Please enter your OTP!",
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

export default OtpVerification;
