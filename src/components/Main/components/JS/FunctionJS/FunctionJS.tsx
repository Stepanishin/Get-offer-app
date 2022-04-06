import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';

const FunctionJS:FC = () => {
    return (
        <div>
            <ReturnButton />
            <h2>Function</h2>
            <p>A function is a block of program code that is defined once and can be executed (called) multiple times.</p>
            <p>All functions in JavaScript are objects!</p>
            <hr />
            <p>A classic function declaration is called a Function Declaration.</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        function sum() &#123;&#125;;
                    </code>
                </pre>
            </div>
            <p>Another way to declaring functions is Function Expression (FE).</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        const sum = function() &#123;&#125;;
                    </code>
                </pre>
            </div>
            <p>Arrow function</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        const sum = () =&#62; &#123;&#125;;
                    </code>
                </pre>
            </div>
            <ul>Differences:
                <li>Functions declared as Function Declarations are created by the interpreter before the code is executed, so they can be called before they are declared.</li>
                <li>Arrow function:<ul>
                    <li>Short syntax</li>
                    <li>No binding to this</li>
                    <li>Cannot be used as a constructor</li>
                    <li>No arguments pseudo-array.</li>
                </ul></li>
            </ul>
            <hr />
            <p><b>Recursion</b> is a situation in which a function calls itself inside its body.</p>
            <hr />
            <p><b>Callback</b> or callback function is a function that is executed at the end of an operation, when all other operations have already been completed.</p>

        </div>
    );
};

export default FunctionJS;