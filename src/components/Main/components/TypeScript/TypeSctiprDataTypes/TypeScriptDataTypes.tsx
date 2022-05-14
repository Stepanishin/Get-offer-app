import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';
import { useSelector } from 'react-redux';

const TypeScriptDataTypes: FC = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            <ReturnButton />
            {
                lang.eng
                ?
                <div>
                    <h2>TypeScript data types</h2>
                    <ol>
                        <li>Boolean</li>
                        <li>Number</li>
                        <li>String</li>
                        <li>Array</li>
                        <li>Tuple</li>
                        <li>Enum</li>
                        <li>Unknown</li>
                        <li>Any</li>
                        <li>Void</li>
                        <li>Null and Undefined</li>
                        <li>Never</li>
                        <li>Object</li>
                        <li>Type assertions</li>
                    </ol>
                    <h3>Boolean</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let isDone: boolean = false;
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Number</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let decimal: number = 6; <br />
                                let big: bigint = 100n;
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>String</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let color: string = "blue";
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Array</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let list: number[] = [1, 2, 3]; <br/>
                                or <br/>
                                let list: Array&#60;number&#62; = [1, 2, 3];
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Tuple</h3>
                    <p>Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            &#47;&#47;Declare a tuple type <br/>
                                let x: [string, number]; <br/>
                                &#47;&#47; Initialize it <br/>
                                x = ["hello", 10]; &#47;&#47; OK <br/>
                                &#47;&#47; Initialize it incorrectly <br/>
                                x = [10, "hello"]; &#47;&#47; Error <br/>
                            </code> 
                        </pre>
                    </div>
                    <hr />
                    <h3>Enum</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            enum Color &#123;<br/>
                            Red,<br/>
                            Green,<br/>
                            Blue,<br/>
                                &#125;<br/>
                                let c: Color = Color.Green;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Unknown</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let notSure: unknown = 4; <br/>
                            notSure = "maybe a string instead";<br/>
                            <br/>
                            &#47;&#47; OK, definitely a boolean<br/>
                            notSure = false;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Any</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            declare function getValue(key: string): any;<br/>
                            &#47;&#47; OK, return value of 'getValue' is not checked<br/>
                            const str: string = getValue("myString");<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Void</h3>
                    <p>void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            function warnUser(): void &#123;<br/>
                            console.log("This is my warning message");<br/>
                            &#125;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Null and Undefined</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let u: undefined = undefined;<br/>
                            let n: null = null;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Never</h3>
                    <p>The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            &#47;&#47; Function returning never must not have a reachable end point<br/>
                            function error(message: string): never &#123;<br/>
                            throw new Error(message);<br/>
                            &#125;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Object</h3>
                    <p>object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.</p>
                    <hr />
                    <h3>Type assertions</h3>
                    <p>Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually, this will happen when you know the type of some entity could be more specific than its current type.
                    Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.</p>
                    <p>Type assertions have two forms.One is the as-syntax:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let someValue: unknown = "this is a string";<br/>
                            let strLength: number = (someValue as string).length;<br/>
                            </code>
                        </pre>
                    </div>
                    <p>The other version is the “angle-bracket” syntax:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let someValue: unknown = "this is a string";<br/>
                            let strLength: number = (&#60;string&#62;someValue).length;<br/>
                            </code>
                        </pre>
                    </div>
                </div>
                :
                <div>
                    <h2>Типы данных в TypeScript</h2>
                    <ol>
                        <li>Boolean</li>
                        <li>Number</li>
                        <li>String</li>
                        <li>Array</li>
                        <li>Tuple</li>
                        <li>Enum</li>
                        <li>Unknown</li>
                        <li>Any</li>
                        <li>Void</li>
                        <li>Null and Undefined</li>
                        <li>Never</li>
                        <li>Object</li>
                        <li>Type assertions</li>
                    </ol>
                    <h3>Boolean</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let isDone: boolean = false;
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Number</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let decimal: number = 6; <br />
                                let big: bigint = 100n;
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>String</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let color: string = "blue";
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Array</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                                let list: number[] = [1, 2, 3]; <br/>
                                or <br/>
                                let list: Array&#60;number&#62; = [1, 2, 3];
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Tuple</h3>
                    <p>Типы Tuple позволяют выразить массив с фиксированным числом элементов, типы которых известны, но не обязательно должны быть одинаковыми. Например, вы можете захотеть представить значение в виде пары строки и числа:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            &#47;&#47;Declare a tuple type <br/>
                                let x: [string, number]; <br/>
                                &#47;&#47; Initialize it <br/>
                                x = ["hello", 10]; &#47;&#47; OK <br/>
                                &#47;&#47; Initialize it incorrectly <br/>
                                x = [10, "hello"]; &#47;&#47; Error <br/>
                            </code> 
                        </pre>
                    </div>
                    <hr />
                    <h3>Enum</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            enum Color &#123;<br/>
                            Red,<br/>
                            Green,<br/>
                            Blue,<br/>
                                &#125;<br/>
                                let c: Color = Color.Green;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Unknown</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let notSure: unknown = 4; <br/>
                            notSure = "maybe a string instead";<br/>
                            <br/>
                            &#47;&#47; OK, definitely a boolean<br/>
                            notSure = false;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Any</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            declare function getValue(key: string): any;<br/>
                            &#47;&#47; OK, return value of 'getValue' is not checked<br/>
                            const str: string = getValue("myString");<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Void</h3>
                    <p>void немного похож на противоположность any: отсутствие вообще какого-либо типа. Вы можете часто видеть это как возвращаемый тип функций, которые не возвращают значение:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            function warnUser(): void &#123;<br/>
                            console.log("This is my warning message");<br/>
                            &#125;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Null and Undefined</h3>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let u: undefined = undefined;<br/>
                            let n: null = null;<br/>
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Never</h3>
                    <p>Тип never представляет собой тип значений, которые никогда не встречаются. Например, never — это возвращаемый тип для функционального выражения или выражения стрелочной функции, которое всегда вызывает исключение или исключение, которое никогда не возвращается. Переменные также приобретают тип never, если они сужены какими-либо охранниками типа, которые никогда не могут быть истинными.</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            &#47;&#47; Function returning never must not have a reachable end point
                            function error(message: string): never &#123;
                            throw new Error(message);
                            &#125;
                            </code>
                        </pre>
                    </div>
                    <hr />
                    <h3>Object</h3>
                    <p>object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.</p>
                    <hr />
                    <h3>Type assertions</h3>
                    <p>иногда вы окажетесь в ситуации, когда будете знать о значении больше, чем TypeScript. Обычно это происходит, когда вы знаете, что тип некоторого объекта может быть более конкретным, чем его текущий тип.
                    Утверждения типов — это способ сказать компилятору: «Поверь мне, я знаю, что делаю». Утверждение типа похоже на приведение типа в других языках, но оно не выполняет специальной проверки или реструктуризации данных. Он не влияет на время выполнения и используется исключительно компилятором. TypeScript предполагает, что вы, как программист, выполнили все необходимые специальные проверки.</p>
                    <p>Утверждения типа имеют две формы. Одна из них — as-синтаксис:</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let someValue: unknown = "this is a string";<br/>
                            let strLength: number = (someValue as string).length;<br/>
                            </code>
                        </pre>
                    </div>
                    <p>Другая версия — это синтаксис "угловой скобки":</p>
                    <div className='codeInsertion'>
                        <pre>
                            <code>
                            let someValue: unknown = "this is a string";<br/>
                            let strLength: number = (&#60;string&#62;someValue).length;<br/>
                            </code>
                        </pre>
                    </div>
                </div>
            }
        </div>
    );
};

export default TypeScriptDataTypes;