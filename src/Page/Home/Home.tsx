import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App-header">
      <Space>
        <Link to="/" className="menu">
          <Button>Home</Button>
        </Link>
        <Link to="/login" className="menu">
          <Button>Login</Button>
        </Link>
        <Link to="/todolist" className="menu">
          <Button>Todo List</Button>
        </Link>
      </Space>
    </div>
  );
}
