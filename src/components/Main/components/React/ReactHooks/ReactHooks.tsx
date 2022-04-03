import React, { FC } from 'react';

const ReactHooks:FC = () => {
    return (
        <div>
            <h1>Hooks</h1>
            <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.</p>
            <a href="https://reactjs.org/docs/hooks-overview.html">Hooks</a>
            <h3>State Hook</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    const [state, setState] = useState(initialState);
                    </code>
                </pre>
            </div>
            <p>UseState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.</p>
            <p>The only argument to useState is the initial state.</p>
            <h3>Effect Hook</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    useEffect(() =&gt; &#123;

                    &#125;, []);
                    </code>
                </pre>
            </div>
            <p>The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
            <h3>useContext</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    const value = useContext(MyContext);
                    </code>
                </pre>
            </div>
            <p>Context is a functionality that allows you to pass data through the component tree without having to pass it at intermediate levels.</p>
            <h3>UseReducer</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    const [state, dispatch] = useReducer(reducer, initialArg, init);
                    </code>
                </pre>
            </div>
            <p>An alternative to useState. Accepts a reducer of type (state, action)  =&gt; newState, and returns the current state paired with a dispatch method.</p>
            <h3>useCallback</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                        const memoizedCallback = useCallback(
                        () =&gt; &#123;
                            doSomething(a, b);
                        &#125;,
                        [a, b],
                        );
                    </code>
                </pre>
            </div>
            <p>Returns a memoized callback.
            Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).</p>
            <h3>UseMemo</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);
                    </code>
                </pre>
            </div>
            <p>Returns a memoized value.
            Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.</p>
            <h3>useRef</h3>
            <div className='codeInsertion'>
                <pre>
                    <code>
                    const refContainer = useRef(initialValue);
                    </code>
                </pre>
            </div>
            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>

        </div>
    );
};

export default ReactHooks;