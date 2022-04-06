import { RollbackOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ReturnButton:FC = () => {
    return (
        <Link to={'./../'}><RollbackOutlined /></Link>
    );
};

export default ReturnButton;