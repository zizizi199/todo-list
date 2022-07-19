import { Col, Row } from "antd";
import React, { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";

export interface TodoListItems {
  work: string;
  isComplete: boolean;
}

export default function TodoList() {
  const [list, setList] = useState<TodoListItems[]>([]);
  return (
    <div className="app">
      <Row align="middle" justify="center">
        <Col lg={8} md={12} xs={24}>
          <Form list={list} setList={setList} />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col lg={8} md={12} xs={24}>
          <List list={list} setList={setList} />
        </Col>
      </Row>
    </div>
  );
}
