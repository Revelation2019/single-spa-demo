import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import HeaderTop from './HeaderTop';
import MenuList from './MenuList';
import './index.module.scss';
// import { RouteConfigComponentProps } from 'react-router-config';

const { Content } = Layout;

/** 基座 */
const Basis = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderTop  />
      <Layout>
        <MenuList />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div id="micro-content"></div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Basis;