import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space } from 'antd';
import React from 'react'
import { IState as Prop } from '../App';
import '../App.css'
interface IProp {
    lists: Prop['lists'],
    setLists: React.Dispatch<React.SetStateAction<Prop['lists']>>,
}
export default function List({ lists, setLists }: IProp) {
    const handleComplete = (e:string) => {
        const update = lists.map(list=>{
            if(list.work === e){
                return{
                    ...list,
                    isComplete : true,
                }
            }
            return list;
        })
        setLists(update)
    }
    const handleDelete = (delStr: string) => {
        setLists(lists => {
            return lists.filter(list => list.work !== delStr)
        })
    }
    return (
        <div>
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                <h1>List Todo</h1>
            </Space>
            <div className='list-container'>

                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    {lists.map((list,index:number) => (
                        <Row align='middle' key={index}>
                            <Col 
                                className={list.isComplete? "complete" :""}
                                style={{
                                    paddingLeft: 30, 
                                }}
                                lg={{ span: 12 }}
                                sm={{ span: 12 }}
                                xs={{ span: 12 }}
                                
                            >
                                {list.work}

                            </Col>
                            <Col
                                lg={{ span: 6 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                            >

                                <Button
                                    type="primary"
                                    onClick={()=>handleComplete(list.work)}
                                    icon={<CheckOutlined />}
                                >
                                    Done
                                </Button>
                            </Col>
                            <Col
                                lg={{ span: 6 }}
                                sm={{ span: 6 }}
                                xs={{ span: 6 }}
                            >

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
    )
}
