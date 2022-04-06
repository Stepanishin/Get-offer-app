import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';

const Closure:FC = () => {
    return (
        <div>
            <ReturnButton />
            <h2>Closure</h2>
            <p>Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.</p>
            <p>In other words, a closure is a function along with all the external variables that are available to it.</p>
            <p>When a function is created, it gets a hidden [[Environment]] property that refers to the scope in which it was created. When a function is called, wherever it is passed in the code, it will look for variables first in itself, and then in external scopes, which are taken from [[Environment]].</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    <span className='blueText'>function </span>OuterFunction() &#123;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;<span className='blueText'>var </span>outerVariable = 100;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;<span className='blueText'>function </span>InnerFunction() &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(outerVariable);<br />
                    &#125;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;<span className='blueText'>return </span>InnerFunction;<br />
                    &#125;<br />
                    <span className='blueText'>var </span>innerFunc = OuterFunction();<br />
                    <br />
                    innerFunc(); <span className='greenText'>// 100</span> <br />
                    </code>
                </pre>
            </div>
            <p>In the above example, <span className='azureText'> return InnerFunction;</span> returns InnerFunction from OuterFunction when you call OuterFunction( ). A variable <span className='azureText'> innerFunc</span> reference the InnerFunction( ) only, not the OuterFunction( ). So now, when you call innerFunc( ), it can still access <span className='azureText'> outerVariable</span> which is declared in OuterFunction( ). This is called Closure.</p>
            <hr />
            <p>Scope is the area where a variable is associated with a specific value.</p>
        </div>
    );
};

export default Closure;