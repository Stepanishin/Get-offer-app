import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import JS from './components/JS/JS';
import { JSRoutes } from '../../router/index'



const Main:FC = () => {
    return (
        <Content className="site-layout" style={{ padding: '20px 50px', marginTop: 64, minHeight: 'calc(100vh - 125px)' , }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
                <Route path='/' element={<Home />} />    
                <Route path='/JS' element={<JS />}>
                </Route> 
                {JSRoutes.map(route =>
                    <Route path={route.path}
                           key={route.path}
                           element={<route.component />}
                    />
                )}
            </Routes>              
            </div>
        </Content>
    );
};

export default Main;