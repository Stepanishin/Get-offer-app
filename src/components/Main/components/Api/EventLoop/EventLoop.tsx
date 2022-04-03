import React, { FC } from 'react';

const EventLoop:FC = () => {
    return (
        <div>
            <h1>Event loop</h1>
            <p>Javascript is a single threaded programming language. It cannot perform two tasks at the same time. All tasks are performed in order of priority. Synchronous functions are executed first, then asynchronous functions and promises. Microtasks run first, then macrotasks</p>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    setTimeout(() =&gt; alert("timeout"));
                    <br />
                    Promise.resolve()
                    .then(() =&gt; alert("promise"));
                    <br />
                    alert("code");
                    </code>
                </pre>
            </div>
            <p>The order of execution of the code above would be:</p>
            <ol>
                <li><span className='azureText'>code</span> appears first because this is a normal synchronous call.</li>
                <li>The <span className='azureText'>promise</span> appears second because <span className='azureText'>.then</span> goes through the microtask queue and is executed after the current synchronous code.</li>
                <li><span className='azureText'>timeout</span> appears last because it is a macro task.</li>
            </ol>
        </div>
    );
};

export default EventLoop;