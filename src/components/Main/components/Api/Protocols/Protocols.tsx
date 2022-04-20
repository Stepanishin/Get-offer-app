import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Protocols:FC = () => {

    const dispatch = useDispatch()
    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <>
        {
            lang.eng
            ?
            <div>
                <h2>Model OSI</h2>
                <p>The Open Systems Interconnection (OSI) model is the skeleton, foundation, and base of all network entities. The model defines network protocols, distributing them into 7 logical levels.</p>
                <p>A protocol is a set of rules that regulate the format and procedures for the interaction of processes of the same levels based on message exchange.</p>
                <h3>Application layer protocols</h3>
                <p><span className='greenText'>FTP</span> stands for File Transfer Protocol.

                FTP allows the subscriber to exchange binary and text files with any computer on the network. By establishing a connection with a remote computer, the user can copy a file from a remote computer to his own or copy a file from his computer to a remote one.

                For example, when working with site files for quick exchange between PC and site directories.</p>
                <hr />
                <p><span className='greenText'>HTTP</span> (Hypertext Transfer Protocol) is a protocol for working with hypertext documents.

                The HTTP protocol is used to send Web pages between computers connected to the same network. There is also now an extension to the HTTP protocol, HTTPS (Hyper Text Secure Transfer Protocol), which supports encryption using the SSL and TLS cryptographic protocols.

                The HTTPS protocol must be used, for example, on websites where confidential information is entered and transmitted (personal data, access details, payment card details), on any websites where authorization is used, interaction with payment systems, mail services. The use of this protocol will prevent the receipt and use of data by third parties.</p>
                <hr />     
                <p><span className='greenText'>TELNET</span> is a remote access protocol.

                TELNET allows the subscriber to work on any computer that is on the same network with him, as on his own - that is, run programs, change the operating mode, and so on.

                In practice, the possibilities are limited to the level of access that is set by the administrator of the remote machine.</p>       
                <hr />
                <h3>Transport Layer Protocol</h3>
                <p><span className='greenText'>TCP</span> (Transmission Control Protocol) is a protocol for controlling the transmission of information.

                When transferring from computer to computer over the Internet, TCP operates at the top level between two end systems, such as a browser and a web server. TCP performs a reliable transfer of a stream of bytes from one process to another. TCP implements flow control, congestion control, handshake, reliable transmission.</p>
                <hr />
                <h3>Link layer protocol</h3>
                <p><span className='greenText'>Ethernet</span> - the protocol defines the frame format and media access control - at the data link layer of the OSI model.</p>
                <hr />
                <hr />
                <p>Let's imagine how these protocols would work if they were involved in sending a mail parcel.</p>
                <ol>
                    <li>First, the FTP protocol is enabled. It makes it possible to establish a connection with the recipient. </li>
                    <li>Next is the HTTP / HTTPS protocol, it can be represented as a path along which the package will be delivered.</li>
                    <li>The TCP protocol is enabled at the time of sending the message. He controls its delivery to its destination.</li>
                    <li>Next, the IP protocol comes into play, which assigns the appropriate address to the letter..</li>
                </ol>
            </div>
            :
            <div>
                <h2>Модель OSI</h2>
                <p>Модель Open Systems Interconnection (OSI) — это скелет, фундамент и база всех сетевых сущностей. Модель определяет сетевые протоколы, распределяя их на 7 логических уровней.</p>
                <p>Протокол — это совокупность правил, регламентирующих формат и процедуры взаимодействия процессов одноименных уровней на основе обмена сообщениями.</p>
                <h3>Протоколы прикладного уровня</h3>
                <p><span className='greenText'>FTP</span> (англ. File Transfer Protocol) — протокол передачи файлов. 

                FTP даёт возможность абоненту обмениваться двоичными и текстовыми файлами с любым компьютером сети. Установив связь с удалённым компьютером, пользователь может скопировать файл с удалённого компьютера на свой или скопировать файл со своего компьютера на удаленный.

                Например, при работе с файлами сайта для быстрого обмена между ПК и директориями сайта.</p>
                <hr />
                <p><span className='greenText'>HTTP</span> (англ. Hypertext Transfer Protocol) — протокол работы с гипертекстовыми документами.

                Протокол HTTP используется при пересылке Web-страниц между компьютерами, подключенными к одной сети. Также сейчас имеется расширение протокола HTTP — HTTPS (безопасный протокол передачи гипертекста), который поддерживает шифрование посредством криптографических протоколов SSL и TLS.

                HTTPS-протокол необходимо использовать, например, на веб-сайтах, где вводится и передаётся конфиденциальная информация (личные данные, детали доступа, реквизиты платёжных карт), на любых веб-сайтах, где используется авторизация, взаимодействие с платёжными системами, почтовыми сервисами. Использование этого протокола позволит предотвратить получение и использование данных третьими лицами.</p>
                <hr />
                <p><span className='greenText'>TELNET</span> — это протокол удалённого доступа.  

                TELNET даёт возможность абоненту работать на любой ЭВМ, находящейся с ним в одной сети, как на своей собственной — то есть запускать программы, менять режим работы и так далее.

                На практике возможности ограничиваются тем уровнем доступа, который задан администратором удалённой машины.</p>
                <hr /> 
                <h3>Протокол Транспортного уровня</h3>
                <p><span className='greenText'>TCP</span> (Transmission Control Protocol) — протокол контроля передачи информации.

                Когда осуществляется передача от компьютера к компьютеру через Интернет, TCP работает на верхнем уровне между двумя конечными системами, например, браузером и веб-сервером. TCP осуществляет надёжную передачу потока байтов от одного процесса к другому. TCP реализует управление потоком, управление перегрузкой, рукопожатие, надёжную передачу.</p>
                <hr />
                <h3>Протокол Канального уровня</h3>
                <p><span className='greenText'>Ethernet</span> — протокол определяет формат кадров и управление доступом к среде — на канальном уровне модели OSI.</p>
                <hr />
                <hr />
                <p>Давайте представим, как бы действовали эти протоколы, если бы участвовали в отправке почтовой посылки.</p>
                <ol>
                    <li>Сначала включается FTP-протокол. Он даёт возможность установить связь с получателем. </li>
                    <li>Дальше — HTTP/HTTPS-протокол, его можно представить в виде пути, по которому будет доставляться посылка.</li>
                    <li>Протокол TCP включается в момент пересылки письма. Он контролирует его доставку до пункта назначения.</li>
                    <li>Дальше в действие вступает IP-протокол, который присваивает письму соответствующий адрес.</li>
                </ol>
            </div>
        }
        </>
    );
};

export default Protocols;