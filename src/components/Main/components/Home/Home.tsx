import React, { FC, useState } from 'react';
import { Input } from 'antd';
import SearchFunction from '../../../UI/SearchFunction';

const Home:FC = () => {

    // const [searchQuery, setSearchQuery] = useState('');
    // const { Search } = Input;
    // const onSearch = (e: any) => {
    //     console.log(searchQuery)
    // }
    
    

    return (
        <div>
            {/* <Search  /> */}
            <SearchFunction />
            {/* <Search placeholder="search..." onSearch={onSearch} onChange={e => setSearchQuery(e.target.value)} enterButton style={{ maxWidth: 300 }} value={searchQuery} /> */}
            <h1>Get offer!</h1>
            <p>This site will help you to interview for the position of junior frontend developer.</p>
            <p>There may be errors here.</p>
            <p>The site will be constantly updated.</p>
        </div>
    );
};

export default Home;