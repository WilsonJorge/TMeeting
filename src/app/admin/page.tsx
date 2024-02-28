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
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Charts from '@/components/dashboard/Charts';
import Cards from '@/components/dashboard/Cards';
import MyTable from '@/components/dashboard/MyTable';
import Link from 'next/link';
import MenuContent from '@/components/dashboard/MenuContent';
import BookForm from '@/components/Book/BookForm'

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
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
                <Space size={20} direction="vertical">
           <Typography.Title level={4}>Dashboard</Typography.Title>

                <Space direction="horizontal">
                    <Card  
                        icon={<ShoppingCartOutlined
                            style={{
                                    color:"green",
                                    backgroundColor:"rgba(0,255,0,0.25)",
                                    borderRadius:20,
                                    fontSize:24,
                                    padding:8, }}  
                            />} 
                            title="Orders"
                            value={2000}/>
                    <Card 
                    icon={<ShoppingOutlined
                        style={{
                                color:"blue",
                                backgroundColor:"rgba(0,0,255,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title="Inventory"
                    value={2000}/>
                    

                    <Card 
                    icon={<UserOutlined
                        style={{
                                color:"purple",
                                backgroundColor:"rgba(0,255,255,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title="Customer" 
                    value={2000}/>

                    <Card 
                    icon={<DollarCircleOutlined
                        style={{
                                color:"red",
                                backgroundColor:"rgba(255,0,0,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title="Revenue" 
                    value={20000}/>
                </Space>
                
                
        </Space> 

        <Space>
           <Charts/>
        </Space> 

        <MyTable/>

        <BookForm/>

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

