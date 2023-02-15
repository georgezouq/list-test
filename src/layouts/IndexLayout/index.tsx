import React from 'react';
import { SnippetsOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BreadCrumbComponent from '@/components/Breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

interface IProps {
  children: JSX.Element
}

const IndexLayout: React.FC<IProps> = ({ children }) => {
  const router = useRouter()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClick = (e: any) => {
    router.push(e.key)
  }

  return (
    <Layout>
      <Head>
        <title>List Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[router.pathname]}
          onClick={handleClick}
          items={[
            {
              key: '/',
              icon: React.createElement(HomeOutlined),
              label: 'Home'
            },
            {
              key: '/messages',
              icon: React.createElement(SnippetsOutlined),
              label: 'Messages'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#09223f' }}>
          <div className="logo">
            <img src="/logo.png" height="64px" />
          </div>
        </Header>
        <BreadCrumbComponent />
        <Content style={{ margin: '24px 16px 0' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default IndexLayout;