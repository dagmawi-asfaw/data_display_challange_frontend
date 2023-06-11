
import React, { useEffect } from 'react';
 
import {   Table,  } from 'antd';
import {  useSelector } from 'react-redux';
import { RootState,useAppDispatch } from '../../store';
import {getTasks } from '../../slices/task_slice'
 
 

 


function DataTable() {

  

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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
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
              return <a>Delete</a>;
          },
      },
  ];

  return (
    <Table dataSource={tasks} columns={columns} />
  );
}

export default DataTable;
