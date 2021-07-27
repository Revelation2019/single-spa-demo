import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
// import { triggerAppChange } from 'single-spa';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuList = () => {
  
  const handleClick = (path: string) => {
    window.open(path, '_self');
    // window.history.pushState(null, '', path);
    // triggerAppChange();
  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="icec-cloud-inquiry-mall-react">
          <Menu.Item key="1">
            <span onClick={() => handleClick('#/inquiry/inquiry-detail')}>InquiryDetail</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span onClick={() => handleClick('#/inquiry/inquiry-detail-by-parts')}>InquiryDetailByParts</span>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="icec-cloud-product-seller-react">
          <Menu.Item key="5">
            <span onClick={() => handleClick('#/product/product-detail')}>ProductDetail</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default MenuList;