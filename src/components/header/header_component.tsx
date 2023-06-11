import React, { useEffect } from 'react';
import './header_stylesheet.css';
import {  Layout, theme,Button, Upload, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps ,} from 'antd';
 
import {useAppDispatch } from '../../store';
import {getTasks } from '../../slices/task_slice'
 
const { Header,   } = Layout;

 



const MainHeader = () => {
  const dispatch = useAppDispatch()


  const props: UploadProps = {
    name: 'file',
    action: 'http://localhost:3000/upload',
    method: 'POST',
    accept:'.xlsx',
    headers: {
      "content-type": 'multipart/form-data',
      "Access-Control-Allow-Origin":"*"
    },
    maxCount: 1, 
    onChange: (info: any) => {
      if (info.file.status === 'done') {
         dispatch(getTasks());
         } 
     }
  };

   
    
  return (
    <Header className='main-header'>
      <Upload  {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
</Header>
  );
}

export default MainHeader;
