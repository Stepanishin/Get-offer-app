import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ReturnButton from '../../../../UI/ReturnButton';

const Position:FC = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            <ReturnButton />
            {
                lang.eng
                ?
                <div>
                    <h2>CSS Layout - The position Property</h2>
                    <p>The position property specifies the type of positioning method used for an element.</p>
                    <p>There are five different position values:</p>
                    <ul>
                        <li>static</li>
                        <li>relative</li>
                        <li>fixed</li>
                        <li>absolute</li>
                        <li>sticky</li>
                    </ul>
                    <hr />
                    <h3>position: static;</h3>
                    <p>HTML elements are positioned static by default.</p>
                    <p>Static positioned elements are not affected by the top, bottom, left, and right properties.</p>
                    <p>An element with <b>position: static;</b> is not positioned in any special way; it is always positioned according to the normal flow of the page.</p>
                    <hr />
                    <h3>position: relative;</h3>
                    <p>An element with <b>position: relative;</b> is positioned relative to its normal position.</p>
                    <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.</p>
                    <hr />
                    <h3>position: fixed;</h3>
                    <p>An element with <b>position: fixed;</b> is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.</p>
                    <p>A fixed element does not leave a gap in the page where it would normally have been located.</p>
                    <hr />
                    <h3>position: absolute;</h3>
                    <p>An element with <b>position: absolute;</b> is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).</p>
                    <p>However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.</p>
                    <p>Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.</p> 
                    <hr />
                    <h3>position: sticky;</h3>
                    <p>An element with <b>position: sticky;</b> is positioned based on the user's scroll position.</p>
                    <p>A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
                </div>
                :
                <div>
                    <h2>Макет CSS — свойство position</h2>
                    <p>Свойство position указывает тип метода позиционирования, используемого для элемента.</p>
                    <p>Существует пять различных значений position:</p>
                    <ul>
                        <li>static</li>
                        <li>relative</li>
                        <li>fixed</li>
                        <li>absolute</li>
                        <li>sticky</li>
                    </ul>
                    <hr />
                    <h3>position: static;</h3>
                    <p>Элементы HTML по умолчанию располагаются статично.</p>
                    <p>Статично расположенные элементы не зависят от свойств top, bottom, left и right.</p>
                    <p>Элемент с <b>position: static</b> не позиционируется каким-либо особым образом; он всегда позиционируется в соответствии с обычным потоком страницы.</p>
                    <hr />
                    <h3>position: relative;</h3>
                    <p>Элемент с <b>position: relative;</b> позиционируется относительно своего нормального положения.</p>
                    <p>Установка свойств top, right, bottom и left элемента с относительным позиционированием приведет к тому, что его положение будет смещено от его нормального положения. Остальное содержимое не будет скорректировано, чтобы заполнить любой зазор, оставленный элементом.</p>
                    <hr />
                    <h3>position: fixed;</h3>
                    <p>Элемент с <b>position: fixed</b> позиционируется относительно области просмотра, что означает, что он всегда остается на одном и том же месте, даже если страница прокручивается. Свойства top, right, bottom и left используются для позиционирования элемента.</p>
                    <p>Фиксированный элемент не оставляет пробелов на странице там, где он обычно располагался бы.</p>
                    <hr />
                    <h3>position: absolute;</h3>
                    <p>Элемент с <b>position: absolute;</b> позиционируется относительно ближайшего позиционированного предка (а не позиционируется относительно окна просмотра, как фиксированный).</p>
                    <p>Однако; если элемент с абсолютным позиционированием не имеет позиционированных предков, он использует тело документа и перемещается вместе с прокруткой страницы.</p>
                    <p>Примечание. Элементы с абсолютным позиционированием удаляются из обычного потока и могут перекрывать элементы.</p> 
                    <hr />
                    <h3>position: sticky;</h3>
                    <p>Элемент с <b>position: sticky</b> позиционируется в зависимости от положения прокрутки пользователя.</p>
                    <p>Фиксированный элемент переключается между относительным и фиксированным в зависимости от положения прокрутки. Он позиционируется относительно до тех пор, пока в окне просмотра не встретится заданное положение смещения, после чего он «застревает» на месте (например, position:fixed).</p>
                </div>
            }
        </div>
    );
};

export default Position;