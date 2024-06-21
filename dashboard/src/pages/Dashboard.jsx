import React, { useState } from "react";
import "../css/dashboard/style.css";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Col, Menu, Row } from "antd";
import { FaHome, FaUser } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

const items = [
  {
    key: "/dashboard",
    icon: <FaHome />,
    label: "Home",
  },
  {
    key: "sub1",
    label: "Users",
    icon: <FaUser />,
    children: [
      {
        key: "5",
        label: "Add User",
      },
      {
        key: "6",
        label: "View User",
      },
    ],
  },
  {
    key: "sub2",
    label: "Product",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "/dashboard/addcategory",
        label: "Add Category",
      },
      {
        key: "/dashboard/addsubcategory",
        label: "Add Sub Category",
      },
      {
        key: "/dashboard/viewcategory",
        label: "View Category",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const OnClick = (e) => {
    navigate(e.key);
  };
  return (
    <div>
      <Row>
        <Col span={4} order={1}>
          <div
            style={{
              width: 280,
            }}
          >
            {/* <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{
                marginBottom: 5,
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
              defaultSelectedKeys={["/dashboard"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
              onClick={OnClick}
            />
          </div>
        </Col>
        <Col span={20} order={2}>
          <div className="outlet-body">
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
