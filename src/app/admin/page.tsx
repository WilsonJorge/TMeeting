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
                    <DashboardCard  
                        icon={<ShoppingCartOutlined
                            style={{
                                    color:"green",
                                    backgroundColor:"rgba(0,255,0,0.25)",
                                    borderRadius:20,
                                    fontSize:24,
                                    padding:8, }}  
                            />} 
                            title={"Orders"} 
                            valeu={2000}/>
                    <DashboardCard 
                    icon={<ShoppingOutlined
                        style={{
                                color:"blue",
                                backgroundColor:"rgba(0,0,255,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title={"Inventory"} 
                    valeu={2000}/>

                    <DashboardCard 
                    icon={<UserOutlined
                        style={{
                                color:"purple",
                                backgroundColor:"rgba(0,255,255,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title={"Customer"} 
                    valeu={2000}/>

                    <DashboardCard 
                    icon={<DollarCircleOutlined
                        style={{
                                color:"red",
                                backgroundColor:"rgba(255,0,0,0.25)",
                                borderRadius:20,
                                fontSize:24,
                                padding:8, }}  
                        />} 
                    title={"Revenue"} 
                    valeu={20000}/>
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

function DashboardCard({title,valeu,icon}){
    return(
      <>
          <Card style={{ width: 250 }}>
              <Space direction="horizontal">
                {icon}
                <Statistic title ={title} value={valeu}/>
              </Space>
          </Card>
       
        
      </>
          )
}

export default Admin;

