import React, { FC, useState } from 'react';
import { Dropdown, Input, Menu } from 'antd';
import { dataJS, dataReact, dataApi } from '../../store/data'
import Fuse from 'fuse.js'
import { Link } from 'react-router-dom';

const SearchFunction:FC = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const { Search } = Input;
    const [resultSearch, setResultSearch] = useState<any | null>([])

    const onSearch = (e: any) => {
        const options = {
            includeScore: true,
            keys: ['title', 'description']
          }

        const searchObj = [...dataJS,...dataReact,...dataApi] 
          
        const fuse = new Fuse(searchObj, options)
          
        const result = fuse.search(searchQuery)
        setResultSearch(result)
    }
    
    

    const searchResult = (
        <Menu>
          {
            (resultSearch.length === 0)
            ?
            <Menu.Item key="nothing">Nothing found</Menu.Item>
            :
            resultSearch.map((item: any, id: any) => {
   
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
                <Search placeholder="search..." onSearch={onSearch} onChange={e => setSearchQuery(e.target.value)} enterButton style={{ maxWidth: 300 }} value={searchQuery} /> 
            </Dropdown>
        </div> 
        
    );
};

export default SearchFunction;