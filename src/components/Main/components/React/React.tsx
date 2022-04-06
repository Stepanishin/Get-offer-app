import { Avatar, List } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ReturnButton from '../../../UI/ReturnButton';

const ReactPage:FC = () => {

    const data = [
        {
          title: 'React',
          link: '/React/DefinitionOfReact',
          description: 'What is it React?'
        },
        {
          title: 'React hooks',
          link: '/React/ReactHooks',
          description: 'All of React hoots which i know'
        },
      ];

    return (
        <>
        <ReturnButton />
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

export default ReactPage;