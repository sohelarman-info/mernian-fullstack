import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import axios from "axios";

const ViewCategory = () => {
  const [catlist, setCatlist] = useState([]);
  // View Category
  useEffect(() => {
    async function allcat() {
      let Category = await axios.get(
        "http://127.0.0.1:8000/product/viewcategory"
      );
      let CatData = [];
      Category.data.map((item) => {
        CatData.push({
          key: item._id,
          name: item.name,
          status: item.status,
        });
      });
      setCatlist(CatData);
    }
    allcat();
  }, []);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "ID",
      dataIndex: "key",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];
  return (
    <div>
      <Divider>Category List</Divider>
      <Table columns={columns} dataSource={catlist} size="small" />
    </div>
  );
};

export default ViewCategory;
