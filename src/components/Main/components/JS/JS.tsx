import { Avatar, List } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './JS.css'

const JS:FC = () => {

    const data = [
        {
          title: 'JavaScript Closure',
          link: '/JS/Closure',
          description: 'Closure is one of important concept in JavaScript. It is widely discussed and still confused concept. Lets understand what the closure is.'
        },
        {
          title: 'Copying Objects in JavaScript',
          link: '/JS/CopyObjects',
          description: '3 ways to clone an object'
        },
      ];

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <Link to={item.link} ><List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                    description={item.description}
                    />
                </List.Item></Link>
                )}
            />
        </>
    );
};

export default JS;