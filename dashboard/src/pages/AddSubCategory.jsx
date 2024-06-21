import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Checkbox, Form, Input, Select } from "antd";

const AddSubCategory = (ActiveCategory) => {
  const [catlist, setCatlist] = useState([]);
  const [catId, setCatId] = useState("");
  let [successMsg, setSuccessMsg] = useState("");

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = await axios.post(
      "http://127.0.0.1:8000/product/createsubcategory",
      {
        name: values.name,
        categoryId: catId,
      }
    );
    setSuccessMsg("Sub Category Created");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // View Category
  useEffect(() => {
    async function allcat() {
      let Category = await axios.get(
        "http://127.0.0.1:8000/product/viewcategory"
      );
      let CatData = [];
      Category.data.map((item) => {
        CatData.push({ value: item._id, label: item.name });
      });
      setCatlist(CatData);
    }
    allcat();
  }, []);

  let handleChange = (e) => {
    setCatId(e);
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
          label="Sub Category Name"
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
          label="Select Category"
          name="categoryname"
          rules={[
            {
              required: true,
              message: "Please Select your category name!",
            },
          ]}
        >
          <Select
            defaultValue={"Select"}
            onChange={handleChange}
            showSearch
            style={{
              width: 400,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={catlist}
          />
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

export default AddSubCategory;
