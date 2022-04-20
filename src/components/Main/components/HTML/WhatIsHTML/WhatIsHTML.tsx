import React, { FC } from 'react';
import { useSelector } from 'react-redux';

const WhatIsHTML:FC  = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            {
                lang.eng
                ?
                <div>
                    <h2>Internet</h2>
                    <p>The Internet is a worldwide computer network that connects devices around the world to receive and transmit information. The operation of devices is controlled by protocols - software instructions. Using protocols, the network can transfer files (FTP protocol), send and receive e-mails (SMTP, POP3, IMAP), and provide access to websites (HTTP).</p>
                    <hr />
                    <h2>WEB page</h2>
                    <p>A web page is a file with content that can be shared and accessed. The combination of several pages is a website.</p>
                    <hr />
                    <h2>HTML</h2>
                    <p>For documents on the web, a special language was invented - HTML (hypertext markup language), hypertext markup language. <br /> <b>Hypertext</b> is text with links that lead to some place in a document, another document, or a website.</p>
                    <p>HTML is used to mark up the structure and content of a page. With HTML, we tell the browser what we want to show the user (content), how to link pieces of content together (structure), and what meaning each element has (semantics).</p>
                    <p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>
                </div>
                :
                <div>
                    <h2>Интернет</h2>
                    <p>Интернет — это всемирная компьютерная сеть, которая соединяет устройства по всему миру для получения и передачи информации. Работой устройств управляют протоколы — программные инструкции. Используя протоколы, сеть может передавать файлы (протокол FTP), отправлять и получать электронную почту (SMTP, POP3, IMAP) и предоставлять доступ к веб-сайтам (HTTP).</p>
                    <hr />
                    <h2>Веб страница</h2>
                    <p>Веб-страница — это файл с содержимым, которым можно делиться и к которому можно получить доступ. Совокупность нескольких страниц — это сайт.</p>
                    <hr />
                    <h2>HTML</h2>
                    <p>Для документов в сети был придуман специальный язык — HTML (язык гипертекстовой разметки), язык гипертекстовой разметки. <br /> <b>Гипертекст</b> — это текст со ссылками, ведущими в какое-то место в документе, в другой документ или на веб-сайт.</p>
                    <p>HTML используется для разметки структуры и содержимого страницы. С помощью HTML мы сообщаем браузеру, что мы хотим показать пользователю (контент), как связать фрагменты контента вместе (структура) и какое значение имеет каждый элемент (семантика).</p>
                    <p>Веб-браузеры получают HTML-документы с веб-сервера или из локального хранилища и преобразуют документы в мультимедийные веб-страницы. HTML семантически описывает структуру веб-страницы и изначально включает подсказки для внешнего вида документа.</p>
                </div>
            }

        </div>
    );
};

export default WhatIsHTML;