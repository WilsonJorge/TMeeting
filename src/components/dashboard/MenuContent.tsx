import React from 'react';
import { Menu } from 'antd';
import { DashboardOutlined, ScheduleOutlined, LaptopOutlined, FileTextOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MenuContent = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>Usuários</Menu.Item>
            <SubMenu key="sub1" icon={<ScheduleOutlined />} title="Reservas">
                <Menu.Item key="3">Criar</Menu.Item>
                <Menu.Item key="4">Listar</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Salas">
                <Menu.Item key="5">Criar</Menu.Item>
                <Menu.Item key="6">Listar</Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<FileTextOutlined />}>Relatórios</Menu.Item>
            <Menu.Item key="8" icon={<SettingOutlined />}>Configurações</Menu.Item>
        </Menu>
    );
};

export default MenuContent;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Dashboard', '1', <DashboardOutlined />),
//   getItem(<Link href="/">Usuários</Link> , '2', <UserOutlined />),
//   getItem('Reservas', 'sub1', <ScheduleOutlined />, [
//     getItem(<Link href="/">Criar</Link>, '3'),
//     getItem('Listar', '4'),
//   ]),
//   getItem('  Salas', 'sub2', <LaptopOutlined />, [getItem('Criar', '6'), getItem('Listar', '8')]),
//   getItem('Relatórios', '9', <FileTextOutlined />),
//   getItem('Configurações', '10', <SettingOutlined />),
// ];