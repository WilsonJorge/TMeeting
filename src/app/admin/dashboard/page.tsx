"use client"
import React, { useState } from 'react';
import { DollarCircleOutlined,ShoppingCartOutlined, ShoppingOutlined} from "@ant-design/icons";
import {Card, Space, Statistic, Typography} from "antd";
import {
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Charts from '@/components/dashboard/Charts';
import MenuContent from '@/components/dashboard/MenuContent';
import HeaderMain from '@/components/Header/Header';

import { ReactNode } from 'react';

interface DashboardCardProps {
  title: ReactNode;
  value: number;
  icon: ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;
// Função de logout
const handleLogout = () => {
  // Implemente a lógica de logout aqui
  console.log('Logout');
};
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
                            value={2000}/>
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
                    value={2000}/>

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
                    value={2000}/>

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
                    value={20000}/>
                </Space>
                
                
        </Space> 

        <Space>
           <Charts/>
        </Space> 

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          tMeeting ©{new Date().getFullYear()} Created by Wilson Macuacua
        </Footer>
      </Layout>
      
    </Layout>
  );
};

function DashboardCard({title,value,icon}:DashboardCardProps){
    return(
      <>
          <Card style={{ width: 250 }}>
              <Space direction="horizontal">
                {icon}
                <Statistic title ={title} value={value}/>
              </Space>
          </Card>
       
        
      </>
          )
}

export default Admin;

