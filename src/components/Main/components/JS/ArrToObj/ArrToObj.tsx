import React, { FC } from 'react';
import { useSelector } from 'react-redux';

const ArrToObj:FC = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            {
                lang.eng 
                ?
                <div>
                    <h2>Conversion from array to object</h2>
                    <ol>
                        <li>const obj = Object.fromEntries(arr);</li>
                        <li>const obj = &#123;&#46;&#46;&#46;&#97;&#114;&#114;&#125;</li>
                        <li>const obj = Object.assign(&#123;&#32;&#125;, arr);</li>
                        <li>&#99;&#111;&#110;&#115;&#116;&#32;&#111;&#98;&#106;&#61;&#32;&#97;&#114;&#114;&#46;&#114;&#101;&#100;&#117;&#99;&#101;&#40;&#40;&#114;&#101;&#115;&#44;&#32;&#107;&#101;&#121;&#44;&#32;&#105;&#110;&#100;&#101;&#120;&#41;&#32;&#61;&#62;&#32;&#123;&#32;&#114;&#101;&#115;&#91;&#105;&#110;&#100;&#101;&#120;&#93;&#32;&#61;&#32;&#107;&#101;&#121;&#59;&#32;&#114;&#101;&#116;&#117;&#114;&#110;&#32;&#114;&#101;&#115;&#59;&#32;&#125;&#44;&#32;&#123;&#32;&#125;&#41;</li>
                    </ol>
                    <hr />
                    <h2>Conversion from object to array</h2>
                    <ol>
                        <li>
                            <div className='codeInsertion'>
                                <pre>
                                    <code>
                                        const obj = &#123;
                                            name: Evgenii,
                                            surname: Stepanishin
                                        &#125; <br />
                                        const arr = [];<br />
                                        for (let i in obj) &#123; <br />
                                        &nbsp;&nbsp;&nbsp;if (obj.hasOwnProperty(i))  &#123; <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr.push(i) <br />
                                        &nbsp;&nbsp;&nbsp;&#125; <br />
                                        &#125; <br />
                                    </code>
                                </pre>
                            </div>
                        </li>
                        <li>
                        const arr1 = Object.keys(obj);<br />
                        const arr2 = Object.values(obj);
                        </li>
                        <li>const arr = Object.entries(obj);</li>
                    </ol>
                </div>
                :
                <div>
                    <h2>Преобразование из массива в объект</h2>
                    <ol>
                        <li>const obj = Object.fromEntries(arr);</li>
                        <li>const obj = &#123;&#46;&#46;&#46;&#97;&#114;&#114;&#125;</li>
                        <li>const obj = Object.assign(&#123;&#32;&#125;, arr);</li>
                        <li>&#99;&#111;&#110;&#115;&#116;&#32;&#111;&#98;&#106;&#61;&#32;&#97;&#114;&#114;&#46;&#114;&#101;&#100;&#117;&#99;&#101;&#40;&#40;&#114;&#101;&#115;&#44;&#32;&#107;&#101;&#121;&#44;&#32;&#105;&#110;&#100;&#101;&#120;&#41;&#32;&#61;&#62;&#32;&#123;&#32;&#114;&#101;&#115;&#91;&#105;&#110;&#100;&#101;&#120;&#93;&#32;&#61;&#32;&#107;&#101;&#121;&#59;&#32;&#114;&#101;&#116;&#117;&#114;&#110;&#32;&#114;&#101;&#115;&#59;&#32;&#125;&#44;&#32;&#123;&#32;&#125;&#41;</li>
                    </ol>
                    <hr />
                    <h2>Преобразование из объекта в массив</h2>
                    <ol>
                        <li>
                            <div className='codeInsertion'>
                                <pre>
                                    <code>
                                        const obj = &#123;
                                            name: Evgenii,
                                            surname: Stepanishin
                                        &#125; <br />
                                        const arr = [];<br />
                                        for (let i in obj) &#123; <br />
                                        &nbsp;&nbsp;&nbsp;if (obj.hasOwnProperty(i))  &#123; <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr.push(i) <br />
                                        &nbsp;&nbsp;&nbsp;&#125; <br />
                                        &#125; <br />
                                    </code>
                                </pre>
                            </div>
                        </li>
                        <li>
                        const arr1 = Object.keys(obj);<br />
                        const arr2 = Object.values(obj);
                        </li>
                        <li>const arr = Object.entries(obj);</li>
                    </ol>
                </div>
            }
        </div>
    );
};

export default ArrToObj;