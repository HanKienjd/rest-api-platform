import { AppstoreOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import Navbar from './Navbar/Navbar';

const MenuItems = [
  {
    key: '1',
    label: 'Collections',
    path: '/',
    icon: <AppstoreOutlined />,
  },
  {
    key: '2',
    label: 'Tests',
    path: '/tests',
    icon: <CheckSquareOutlined />,
  },
];

const { Header, Sider } = Layout;
export default function MainLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="bg-white  flex items-center w-full border-t-4 border-orange-500 border-b border-gray-300">
        <Navbar />
      </Header>
      <Content>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={MenuItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>

        {/* <main>
        <div className='flex max-w-6xl min-h-screen pt-[86px] mx-auto px-5 bg-white '>
          <div className='mx-auto w-full'>{children}</div>
        </div>
      </main> */}
      </Content>
    </Layout>
  );
}
