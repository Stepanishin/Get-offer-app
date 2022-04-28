import React, { FC } from 'react';
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import ReturnButton from '../../../UI/ReturnButton';
import {dataCSS} from '../../../../store/data'

const CSS :FC = () => {
    return (
        <>
        <ReturnButton />
            <List
                itemLayout="horizontal"
                dataSource={dataCSS}
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

export default CSS;