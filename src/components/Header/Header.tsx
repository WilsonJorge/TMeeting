"use client"
import React, { useState } from 'react';
import { BellOutlined,DownOutlined, LogoutOutlined, UserAddOutlined,SettingFilled } from "@ant-design/icons";
import { Dropdown,Avatar ,Badge} from "antd";
import {
  UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
import './header.css';

const { Header } = Layout;
// Função de logout
const handleLogout = () => {
  // Implemente a lógica de logout aqui
  console.log('Logout');
};

const userMenu = (
  <Menu>
      <Menu.Item key="account" icon={<UserAddOutlined />}>
        Conta
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingFilled />}>
        Configurações
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Sair
      </Menu.Item>
</Menu>
);

const HeaderMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
        <Header className="header" style={{ padding: 0, background: colorBgContainer, border: '1px solid #e8e8e8' }}>
        <div className='user'>
        <Badge count={10} style={{ marginRight: '15px' }}>
              <BellOutlined style={{ fontSize: '24px', marginRight: '20px' }} />
        </Badge>
              <Avatar className="avatar" size="large" icon={<UserOutlined />} style={{ marginRight: '4px' }} />
              <Dropdown overlay={userMenu} placement="bottomRight" trigger={['click']}>
                <span className="email">macuacuaw330@gmail.com <DownOutlined /></span>
              </Dropdown>
          </div>

      </Header>   
 
  );
};

export default HeaderMain;

