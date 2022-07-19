import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import React from "react";
import { TodoListItems } from "../Page/TodoList/TodoList";
import "../App.css";

interface IProp {
  list: TodoListItems[];
  setList: React.Dispatch<React.SetStateAction<TodoListItems[]>>;
}

export default function List({ list, setList }: IProp) {
  const handleComplete = (e: string) => {
    const update = list.map((list) => {
      if (list.work === e) {
        return {
          ...list,
          isComplete: true,
        };
      }
      return list;
    });
    setList(update);
  };

  const handleDelete = (e: string) => {
    setList((lists) => {
      return lists.filter((list) => list.work !== e);
    });
  };

  return (
    <div>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <h1>List Todo</h1>
      </Space>
      <div className="list-container">
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          {list.map((list: TodoListItems, index: number) => (
            <Row align="middle" key={index}>
              <Col
                className={list.isComplete ? "complete" : ""}
                style={{
                  paddingLeft: 30,
                }}
                lg={{ span: 12 }}
                sm={{ span: 12 }}
                xs={{ span: 12 }}
              >
                {list.work}
              </Col>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
                <Button
                  type="primary"
                  onClick={() => handleComplete(list.work)}
                  icon={<CheckOutlined />}
                >
                  Done
                </Button>
              </Col>
              <Col lg={{ span: 6 }} sm={{ span: 6 }} xs={{ span: 6 }}>
                <Button
                  type="primary"
                  danger
                  onClick={() => handleDelete(list.work)}
                  icon={<DeleteOutlined />}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Space>
      </div>
    </div>
  );
}
