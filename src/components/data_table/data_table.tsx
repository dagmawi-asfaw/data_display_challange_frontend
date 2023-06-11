
import React, { useEffect,useState } from 'react';
 
import {DeleteOutlined,EditOutlined,FileAddOutlined} from '@ant-design/icons';
import { Button,Table,  Space,   } from 'antd';
import {  useSelector } from 'react-redux';
import { RootState,useAppDispatch } from '../../store';
import {getTasks } from '../../slices/task_slice'
import type { SizeType } from 'antd/es/config-provider/SizeContext';
 

 


function DataTable() {

  const [size, setSize] = useState<SizeType>('large'); 

  const tasks = useSelector((state:RootState) => state.data);
  const dispatch = useAppDispatch()
  useEffect(() => { 
    dispatch(getTasks());
  })
 
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'no',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
 
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
          render: () => { 
            return (
            <Space wrap>
                <Button type="primary" icon={<EditOutlined />} size={size} />
                <Button type="primary" style={{backgroundColor:'green'}} icon={<FileAddOutlined />} size={size} />
                <Button type="primary" style={{backgroundColor:'red'}} icon={<DeleteOutlined />} size={size} />
            </Space>);
          },
      },
  ];

  return (
    <Table dataSource={tasks} columns={columns} />
  );
}

export default DataTable;
