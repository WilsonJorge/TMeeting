"use client"
import React, { useState } from 'react';
import { DollarCircleOutlined, DollarOutlined, ShoppingCartOutlined, ShoppingOutlined} from "@ant-design/icons";
import { DashboardOutlined, ScheduleOutlined, LaptopOutlined, FileTextOutlined, SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {Card, Space, Statistic, Typography, Col } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Layout,theme } from 'antd';
import MenuContent from '@/components/dashboard/MenuContent';
import BookList from '@/components/Book/BookList'

const { Header, Content, Footer, Sider } = Layout;

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
        <Header style={{ padding: 0, background: colorBgContainer , marginBottom: 20}} />
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
           <Typography.Title level={4}>Listas de Salas Reservadas</Typography.Title>

        </Space>  
                <BookList/>

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