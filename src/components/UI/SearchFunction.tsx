import React, { FC, useState } from 'react';
import { Dropdown, Input, Menu } from 'antd';
import { dataJS, dataReact, dataApi, dataCSS, dataHTML } from '../../store/data'
import Fuse from 'fuse.js'
import { Link } from 'react-router-dom';

const SearchFunction:FC = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const { Search } = Input;

    const searchObj = [...dataJS,...dataReact,...dataApi, ...dataCSS, ...dataHTML]
    const options = {
            includeScore: true,
            keys: ['title', 'description']
    }
    const fuse = new Fuse(searchObj, options)
    const results = fuse.search(searchQuery);

    function onSearch({ currentTarget } : any) {
      setSearchQuery(currentTarget.value);
    }

    const searchResult = (
        <Menu>
          {
            (results.length === 0)
            ?
            <Menu.Item key="nothing">Nothing found</Menu.Item>
            :
            results.map((item: any, id: any) => {
   
              if (id<5) {
                id++
                return (
                  <Menu.Item key={item.item.title}><Link to={item.item.link}>{item.item.title}</Link></Menu.Item>
                )
              }
            })
          }
        </Menu>
      );
    
    return (
        <div>
            <Dropdown 
            trigger={['click']}
            overlay={searchResult} 
            placement="bottomLeft">
                <Search 
                placeholder="search..." 
                onChange={onSearch}
                enterButton style={{ maxWidth: 300 }} 
                value={searchQuery} /> 
            </Dropdown>
        </div> 
        
    );
};

export default SearchFunction;