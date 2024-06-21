import React from "react";
import "./style.css";
import { FaCheck, FaPlus } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import axios from "axios";

import { Button, Checkbox, Descriptions, Form, Input } from "antd";

export const TaskListComponents = () => {
  const onFinish = async (values) => {
    let data = await axios.post("http://127.0.0.1:8000/user/auth/task", {
      item: values.item,
      description: values.description,
      userId: "258963",
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="task-list-body">
      <div className="task-list-components">
        <div className="profile-area">
          <div className="profile-pic">
            <img
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?t=st=1714747766~exp=1714751366~hmac=75a1cee465bba0f5e07bbcca8af6038ef12106c3cc7f1e0d97ee1c378fd6a909&w=826"
              alt=""
            />
          </div>
          <div className="profile-name">
            <h2>Sohel Arman</h2>
          </div>
        </div>
        <div className="task-list-top-icon-margin">
          <div className="task-list-top-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="50"
              viewBox="0 0 28 35"
              fill="none"
            >
              <path
                d="M3.5 35C2.5375 35 1.71383 34.6576 1.029 33.9728C0.344166 33.2879 0.00116667 32.4637 0 31.5V10.5C0 9.5375 0.343 8.71383 1.029 8.029C1.715 7.34417 2.53867 7.00117 3.5 7H7C7 5.075 7.68542 3.42708 9.05625 2.05625C10.4271 0.685417 12.075 0 14 0C15.925 0 17.5729 0.685417 18.9438 2.05625C20.3146 3.42708 21 5.075 21 7H24.5C25.4625 7 26.2868 7.343 26.9727 8.029C27.6588 8.715 28.0012 9.53867 28 10.5V31.5C28 32.4625 27.6576 33.2868 26.9727 33.9728C26.2879 34.6587 25.4637 35.0012 24.5 35H3.5ZM3.5 31.5H24.5V10.5H21V14C21 14.4958 20.832 14.9118 20.496 15.2478C20.16 15.5838 19.7447 15.7512 19.25 15.75C18.7553 15.7488 18.34 15.5808 18.004 15.246C17.668 14.9112 17.5 14.4958 17.5 14V10.5H10.5V14C10.5 14.4958 10.332 14.9118 9.996 15.2478C9.66 15.5838 9.24467 15.7512 8.75 15.75C8.25533 15.7488 7.84 15.5808 7.504 15.246C7.168 14.9112 7 14.4958 7 14V10.5H3.5V31.5ZM10.5 7H17.5C17.5 6.0375 17.1576 5.21383 16.4727 4.529C15.7879 3.84417 14.9637 3.50117 14 3.5C13.0363 3.49883 12.2127 3.84183 11.529 4.529C10.8453 5.21617 10.5023 6.03983 10.5 7Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="top-title">
            <h2>List of Taks</h2>
            <p>Facilite sua ida ao supermercado!</p>
          </div>
          <div className="top-line"></div>
        </div>
        {/* input area  */}
        <div className="input-area">
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
            <div className="ant-form-flex">
              <div className="item-input">
                <label className="input-label" for="item-input">
                  Item
                </label>
                <Form.Item
                  name="item"
                  className="item-input-box"
                  rules={[
                    {
                      required: true,
                      message: "Please input your item!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="des-input">
                <label className="input-label" for="item-input">
                  description
                </label>
                <Form.Item
                  name="description"
                  className="des-input-box"
                  rules={[
                    {
                      required: true,
                      message: "description Required!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <div className="sub-input">
                <label className="input-label dot-missing" for="item-input">
                  .
                </label>
                <Form.Item>
                  <Button
                    className="submit-input-box sub-input"
                    type="primary"
                    htmlType="submit"
                  >
                    <FaPlus />
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>

        {/* non active item area  */}
        <div className="non-active-area">
          <div className="non-single-item">
            <div className="non-add-item">
              <FaPlus />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>Leite</h2>
                <p>3 caixas</p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="non-single-item">
            <div className="non-add-item">
              <FaPlus />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>Leite</h2>
                <p>3 caixas</p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="non-single-item">
            <div className="non-add-item">
              <FaPlus />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>Leite</h2>
                <p>3 caixas</p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-line non-bottom-margin"></div>

        {/* active item area  */}

        <div className="active-title">
          <h2>Completed Item</h2>
        </div>

        <div className="non-active-area">
          <div className="non-single-item">
            <div className="active-add-item">
              <IoMdCheckmark />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>
                  <strike>Leite</strike>
                </h2>
                <p>
                  <strike>3 caixas</strike>
                </p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="non-single-item">
            <div className="active-add-item">
              <IoMdCheckmark />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>
                  <strike>Leite</strike>
                </h2>
                <p>
                  <strike>3 caixas</strike>
                </p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="non-single-item">
            <div className="active-add-item">
              <IoMdCheckmark />
            </div>
            <div className="non-single-content-flex">
              <div className="non-single-content">
                <h2>
                  <strike>Leite</strike>
                </h2>
                <p>
                  <strike>3 caixas</strike>
                </p>
              </div>
              <div className="non-single-item-delete">
                <div className="delete-icon">
                  <MdOutlineDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
