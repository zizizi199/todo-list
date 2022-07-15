import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import 'antd/dist/antd.min.css';
import { Col, Row } from 'antd';
import './App.css'

export interface IState {
  lists: {
    work:string,
    isComplete:boolean
  }[]
}
export default function App() {
  const [lists, setLists] = useState<IState['lists']>([])
  return (
    <div className='app'>
      <Row
        align='middle'
        justify='center'
      >
        <Col lg={8} md={12} xs={24}>
          <Form lists={lists} setLists={setLists} />
        </Col>
      </Row>
      <Row
        align='middle'
        justify='center'
      >
        <Col lg={8} md={12} xs={24}>
          <List lists={lists} setLists={setLists} />
        </Col>

      </Row>

    </div>
  )
}
