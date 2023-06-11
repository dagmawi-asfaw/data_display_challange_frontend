import React, { useEffect } from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu, theme,Button, message, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import TaskRepository from './api/task_repository';
import TaskModel from './models/task_model';
 
const { Header, Content, Footer } = Layout;

//#8B66C7


//#F2F2F2 - menu background
//#766FCF - text color

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:3000/upload',
  method: 'POST',
  accept:'.xlsx',
  headers: {
    "content-type": 'multipart/form-data',
    "Access-Control-Allow-Origin":"*"
  },
  maxCount:1,
  onChange(info: any) {
    console.log(info);
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    
  },
};




function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();



 

  return (
    <div className="App">
        <Layout className="layout">
        <Header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', backgroundColor: `rgb(121,78,189)`, height: 100, paddingTop: 20, }}>
          <Upload {...props}  >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Header>
     
      <Footer style={{ textAlign: 'center' }}>Powered by Ant Design ©2023 Created by Dagmawi</Footer>
    </Layout>
    </div>
  );
}

export default App;
