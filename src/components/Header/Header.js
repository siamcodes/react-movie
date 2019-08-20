import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
   
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/"> <Icon type="home" />Home</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/about"> <Icon type="appstore" />About </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                Categories
            </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="products">
            <Link to="/products"><Icon type="shopping"/> Products</Link>
          </Menu.Item>
          <Menu.Item key="movie">
            <Link to="/movie"><Icon type="youtube" /> Movie</Link>
          </Menu.Item>

          <Menu.Item key="logout" style={{float:'right'}}>
            <Link to="/logout"><Icon type="logout" /> Logout</Link>
          </Menu.Item>
          <Menu.Item key="profile" style={{ float: 'right' }}>
            <Link to="/products"><Icon type="profile" /> Profile</Link>
          </Menu.Item>
          <Menu.Item key="signin" style={{ float: 'right' }}>
            <Link to="/signup"><Icon type="login" /> Signin</Link>
          </Menu.Item>
          <Menu.Item key="signup" style={{float:'right'}}>
            <Link to="/signin"><Icon type="user-add" /> Signup</Link>
          </Menu.Item>

        </Menu>
      </div>


    )
  }
}
export default Header;