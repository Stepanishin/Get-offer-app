import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ReturnButton from '../../../../UI/ReturnButton';

const Operators:FC = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            <ReturnButton />
            {
                lang.eng
                ?
                <div>
                    <h2>Operators in JavaScript</h2>
                    <p>JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator.</p>
                    <hr />
                    <p> A binary operator requires two operands, one before the operator and one after the operator: <b>operand1 operator operand2</b>. For example, 3+4 or x*y.</p>
                    <hr />
                    <p>A unary operator requires a single operand, either before or after the operator: <b>operator operand</b> or <b>operand operator</b>. For example x++ or delete or typeof</p>
                    <hr />
                    <p>The conditional(ternary) operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is: <b>condition ? val1 : val2</b></p>
                </div>
                :
                <div>
                    <h2>Операторы в  JavaScript</h2>
                    <p>В JavaScript есть как бинарные, так и унарные операторы, а также один специальный тернарный оператор — условный оператор.</p>
                    <hr />
                    <p>Для бинарного оператора требуются два операнда, один перед оператором и один после оператора: <b>operand1 operator operand2</b>. Например, 3+4 или x*y.</p>
                    <hr />
                    <p>Для унарного оператора требуется один операнд либо до, либо после оператора: <b>operator operand</b> or <b>operand operator</b>. Например, x++ или delete или typeof</p>
                    <hr />
                    <p>Условный (тернарный) оператор — это единственный оператор JavaScript, который принимает три операнда. Оператор может иметь одно из двух значений в зависимости от условия. Синтаксис следующий: <b>condition ? val1 : val2</b></p>
                </div>
            }
        </div>
    );
};

export default Operators;