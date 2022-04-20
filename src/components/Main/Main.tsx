import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import JS from './components/JS/JS';
import { ApiRoutes, HTMLRoutes, JSRoutes, ReactRoutes } from '../../router/index'
import ReactPage from './components/React/React';
import Api from './components/Api/Api';
import HTML from './components/HTML/HTML';



const Main:FC = () => {
    return (
        <Content className="site-layout" style={{ padding: '20px 50px', marginTop: 64, minHeight: 'calc(100vh - 125px)' , }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
                <Route path='/' element={<Home />} />    
                <Route path='/JS' element={<JS />} />
                <Route path='/React' element={<ReactPage />} />
                <Route path='/Api' element={<Api />} />
                <Route path='/HTML' element={<HTML />} />
                {JSRoutes.map(route =>
                    <Route path={route.path}
                           key={route.path}
                           element={<route.component />}
                    />
                )}
                {ReactRoutes.map(route =>
                    <Route path={route.path}
                           key={route.path}
                           element={<route.component />}
                    />
                )}
                {ApiRoutes.map(route =>
                    <Route path={route.path}
                           key={route.path}
                           element={<route.component />}
                    />
                )}
                {HTMLRoutes.map(route =>
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