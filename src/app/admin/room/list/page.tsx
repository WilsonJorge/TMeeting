"use client"
import React, { useEffect, useState } from 'react';
import {Space,Typography, Col } from "antd";
import {Layout,theme } from 'antd';
import MenuContent from '@/components/dashboard/MenuContent';
import RoomList from '@/components/Room/RoomList'
import HeaderMain from '@/components/Header/Header';
import { RoomService } from '@/services/RoomService';
import { error } from 'console';

const roomService = new RoomService();




const { Header, Content, Footer, Sider } = Layout;

const Admin: React.FC = () => {

  useEffect(()=>{

    roomService.listarTodos().then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    
  },[])


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider collapsible collapsed={collapsed} onCollapse={(value: boolean) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MenuContent />
      </Sider>
      <Layout>
        <HeaderMain/>
        <Space>

        </Space>
        <Content style={{ margin: '0 16px'}}>
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                <Space size={20} direction="vertical">
           <Typography.Title level={4}>Listas de Salas de Reuniao</Typography.Title>

        </Space>  
                <RoomList/>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          tMeeting ©{new Date().getFullYear()} Created by Wilson Macuacua
        </Footer>
      </Layout>
      
    </Layout>
  );
};

export default Admin;