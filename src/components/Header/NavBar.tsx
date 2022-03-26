import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// interface Props {
//   title: string;
// }

const NavBar:FC<{}> = () => {


    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo">
                <h1>Get Offer!</h1>
            </div>
            <Menu theme="dark" 
                mode="horizontal" 
                // defaultSelectedKeys={['1']} 
                selectable={false}>
                    <Menu.Item key="1"><Link to={"/"}>Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to={"/JS"}>JS</Link></Menu.Item>
                    <Menu.Item key="3"><Link to={"/React"}>React</Link></Menu.Item>
                    <Menu.Item key="4"><Link to={"/Api"}>Api</Link></Menu.Item>
                    <Menu.Item key="5"><Link to={"/HTML"}>HTML</Link></Menu.Item>
                    <Menu.Item key="6"><Link to={"/CSS"}>CSS</Link></Menu.Item>
                    <Menu.Item key="7"><Link to={"/TypeScript"}>TypeScript</Link></Menu.Item>
            </Menu>
        </Header>
    );
};

export default NavBar;