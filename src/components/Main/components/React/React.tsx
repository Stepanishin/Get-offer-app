import { Avatar, List } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ReturnButton from '../../../UI/ReturnButton';
import { dataReact } from '../../../../store/data'

const ReactPage:FC = () => {

    return (
        <>
        <ReturnButton />
            <List
                itemLayout="horizontal"
                dataSource={dataReact}
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