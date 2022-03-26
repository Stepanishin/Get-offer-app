import React, { FC } from 'react';

const Closure:FC = () => {
    return (
        <div>
            <h2>Closure</h2>
            <p>Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.</p>
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
        </div>
    );
};

export default Closure;