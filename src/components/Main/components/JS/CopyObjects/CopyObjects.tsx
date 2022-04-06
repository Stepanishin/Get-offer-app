import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';

const CopyObjects:FC = () => {
    return (
        <div>
            <ReturnButton />
            <p>I know 3 ways to copy an object in Javascript</p>
            <h3>1) The for/in Loop</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        let obj1 = &#123;a:1, b:2&#125;<br />
                        let obj2 = &#123;&#125;<br />
                        <br />
                        for (let key in obj1) &#123;<br />
                        &nbsp;&nbsp;&nbsp;obj2[key] = obj1[key];<br />
                        &#125;
                    </code>
                </pre>
            </div>
            <h3>2) method Object.assign( )</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        let obj1 = &#123;a:1, b:2&#125;<br />
                        let obj2 = &#123;&#125;<br />
                        <br />
                        let obj2 = Object.assign(&#123;&#125;, obj);
                    </code>
                </pre>
            </div>
            <h3>3) methods JSON.parse and JSON.stringify</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        let obj1 = &#123;a:1, b:2&#125;<br />
                        let obj2 = &#123;&#125;<br />
                        <br />
                        obj2 = JSON.parse(JSON.stringify(obj))
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CopyObjects;