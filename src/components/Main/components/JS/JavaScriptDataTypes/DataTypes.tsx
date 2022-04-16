import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';

const DataTypes:FC = () => {
    return (
        <div>
            <ReturnButton />
            <h2>Data Types</h2>
            <p>JavaScript is dynamic and loosely typed language. It means you don't require to specify a type of a variable.</p>
            <p>JavaScript includes primitive and non-primitive data types as per latest ECMAScript 5.1.</p>
            <hr />
            <h3>Primitive Data Types</h3>
            <p>The primitive data types are the lowest level of the data value in JavaScript. The typeof operator can be used with primitive data types to know the type of a value.</p>
            <ol>
                <li><b>String</b> is a textual content wrapped inside ' ' or " " or ` ` (tick sign).</li>
                <li><b>Number</b> is a numeric value.</li>
                <li><b>BigInt</b> is a numeric value in the arbitrary precision format.</li>
                <li><b>Boolean</b> is a logical data type that has only two values, true or false.</li>
                <li><b>Null</b> value denotes an absense of value.</li>
                <li><b>Undefined</b> is the default value of a variable that has not been assigned any value.</li>
            </ol>
            <hr />
            <h3>Structural Data Types</h3>
            <p>The structural data types contain some kind of structure with primitive data.</p>
            <ol>
                <li><b>Object</b> holds multiple values in terms of properties and methods.</li>
                <li><b>Symbol</b> for unique identifiers.</li>
            </ol>
            <hr />
            <h3>The typeof operator</h3>
            <p>The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    <span className='blueText'>typeof</span> <span className='blueText'>undefined</span> // "undefined"
                    <br /><br />
                    <span className='blueText'>typeof</span> 0 // "number"
                    <br /><br />
                    <span className='blueText'>typeof</span> 10n // "bigint"
                    <br /><br />
                    <span className='blueText'>typeof</span> true // "boolean"
                    <br /><br />
                    <span className='blueText'>typeof</span> "foo" // "string"
                    <br /><br />
                    <span className='blueText'>typeof</span> Symbol("id") // "symbol"
                    <br /><br />
                    <span className='blueText'>typeof</span> Math // "object"
                    <br /><br />
                    <span className='blueText'>typeof</span> <span className='blueText'>null</span> // "object"
                    <br /><br />
                    <span className='blueText'>typeof</span> alert // "function"
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default DataTypes;