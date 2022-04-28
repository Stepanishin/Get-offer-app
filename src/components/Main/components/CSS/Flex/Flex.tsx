import React, { FC } from 'react';
import flexDirection from './img/FlexDirection.png'
import flexWrap from './img/FlexWrap.png'
import JustifyContent from './img/JustifyContent.png'
import alignContent from './img/alignContent.png'
import alignItems from './img/alignItems.png'
import order from './img/order.png'
import shrinkGrowBasis from './img/shrinkGrowBasis.png'
import alignSelf from './img/alignSelf.png'

const Flex :FC = () => {
    return (
        <div>
            <h2>display: flex;</h2>
            <hr />
            <h3>flex-direction</h3>
            <img src={flexDirection} alt="" width="250" height="250" />
            <hr />
            <h3>flex-wrap</h3>
            <img src={flexWrap} alt="" width="250" height="250" />
            <hr />
            <h3>justify-content</h3>
            <img src={JustifyContent} alt="" width="250" height="450" />
            <hr />
            <h3>align-content</h3>
            <img src={alignContent} alt="" width="250" height="450" />
            <hr />
            <h3>align-items</h3>
            <img src={alignItems} alt="" width="250" height="450" />
            <hr />
            <h3>order</h3>
            <img src={order} alt="" width="250" height="300" />
            <hr />
            <h3>flex-shrink,flex-grow,flex-basis</h3>
            <img src={shrinkGrowBasis} alt="" width="250" height="250" />
            <hr />
            <h3>align-self</h3>
            <img src={alignSelf} alt="" width="250" height="250" />
            <hr />
        </div>
    );
};

export default Flex;