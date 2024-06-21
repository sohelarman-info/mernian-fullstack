import React from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = async (values) => {
  console.log("Success:", values);
  let data = await axios.post("http://127.0.0.1:8000/product/createcategory", {
    name: values.name,
  });

  console.log(data);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddCategory = (ActiveCategory) => {
  return (
    <div>
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
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your category name!",
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
