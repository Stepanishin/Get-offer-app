import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';

const WhatIsReact:FC = () => {
    return (
        <div>
            <ReturnButton />
            <h1>What Is React?</h1>
            <a href="https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs#what_is_react">What is it React</a>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
            <p>Components are self-contained independent parts of an application that are responsible for handling only one task and do not affect each other in any way.</p>
            <a href="https://habr.com/ru/post/319270/">About JSX</a>
            <h3>Virtual DOM</h3>
            <p>The Virtual DOM is designed to work with a lightweight copy of the normal DOM instead of itself, because DOM operations are one of the most expensive front-end applications. Therefore, the DOM is compared with its copy: changes are determined, the mechanism for redrawing those parts that have been changed is launched.</p>
            <p>Reconciliation - React Node negotiation mechanism between Virtual DOM and real DOM</p>
            <h3>The Component Lifecycle</h3>
            <a href="https://habr.com/ru/post/358090/">Understanding the React Component Lifecycle</a>
            <h4>Mounting</h4>
            <ul>
                <li>constructor()</li>
                <li>static getDerivedStateFromProps()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
            </ul>
            <h4>Updating</h4>
            <ul>
                <li>static getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
            </ul>
            <h4>Unmounting</h4>
            <ul>
                <li>componentWillUnmount()</li>
            </ul>
            <h4>Error Handling</h4>
            <ul>
                <li>static getDerivedStateFromError())</li>
                <li>componentDidCatch()</li>
            </ul>

        </div>
    );
};

export default WhatIsReact;