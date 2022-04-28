import React, { FC } from 'react';
import SearchFunction from '../../../UI/SearchFunction';

const Home:FC = () => {
    return (
        <div>
            <SearchFunction />
            <h1>Get offer!</h1>
            <p>This site will help you to interview for the position of junior frontend developer.</p>
            <p>There may be errors here.</p>
            <p>The site will be constantly updated.</p>
            <hr />
            <hr />
            <p>
                If you would like to use the CV template, please visit our page:  
                <a style={{paddingLeft: '5px'}} href="http://www.get-cv.website/" target="_blank" rel='noreferrer' ><b>Get CV</b></a>
            </p>
        </div>
    );
};

export default Home;