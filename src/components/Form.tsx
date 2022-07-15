import React, { useState } from 'react'
import { IState as Prop } from '../App'
import { Button, Input, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
interface IProp {
    lists: Prop['lists'],
    setLists: React.Dispatch<React.SetStateAction<Prop['lists']>>,
}
export default function Form({ lists, setLists }: IProp) {
    const [inputData, setInputData] = useState({work:'',isComplete:false});
    // console.log(inputData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setInputData({work:e.target.value,isComplete:false});

    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        setLists([...lists, {
            work:inputData.work,
            isComplete:inputData.isComplete
        }]);
        setInputData({work:'',isComplete:false});
    }

    return (
        <div className='form-container'>
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                <h1>Todo list</h1>
            </Space>
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                <Input
                    type='text'
                    style={{ width: 250 }}
                    placeholder='Work to do'
                    value={inputData.work}
                    onChange={handleChange}
                />
                <Button
                    style={{
                        backgroundColor: '#87e8de',
                    }}
                    icon={<PlusOutlined />}
                    onClick={handleClick}
                >
                    Add
                </Button>
            </Space>
        </div>
    )
}
