"use client"
import React, { useState } from 'react';
import {Space, Typography} from "antd";
import { Layout, theme } from 'antd';
import MenuContent from '@/components/dashboard/MenuContent';
import RoomForm from '@/components/Room/RoomForm'
import HeaderMain from '@/components/Header/Header';

const {Content, Footer, Sider } = Layout;

const Admin: React.FC = () => {
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
           <Typography.Title level={4}>Sala</Typography.Title>

        </Space>  

        <RoomForm/>

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