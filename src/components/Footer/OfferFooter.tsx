import { Footer } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const OfferFooter:FC = () => {

    const { Option } = Select;
    const dispatch = useDispatch()

    function handleChange(value:string) {
        dispatch({type: value})
      }

    return (
        <Footer style={{ textAlign: 'center' }}>
            Stepanishin Evgenii
            <br />
            <Select 
            defaultValue="eng" 
            style={{ width: 120 }} 
            onChange={handleChange}>
                <Option value="eng">English</Option>
                <Option value="ru">Russian</Option>
            </Select>
        </Footer>
    );
};

export default OfferFooter;