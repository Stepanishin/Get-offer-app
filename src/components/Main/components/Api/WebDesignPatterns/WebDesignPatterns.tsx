import React, { FC } from 'react';
import ReturnButton from '../../../../UI/ReturnButton';
import { useSelector } from 'react-redux';

const WebDesignPatterns: FC = () => {

    let lang = useSelector((state:any) => state.getLanguageReducer)

    return (
        <div>
            <ReturnButton />
            {
                lang.eng
                ?
                <div>
                    <h2>Web design patterns — SSR, SSG, and SPA</h2>
                    <hr />
                    <h3>SSR (Server-Side Rendering)</h3>
                    <p>In SSR, when a web page is requested, it is rendered on the server, served to the client, and finally rendered by the client.</p>
                    <hr />
                    <h3>SSG (Static-Site Generating)</h3>
                    <p>SSG has similarities with SSR. The page is also generated in the server, however, the page is rendered at build time. So, instead of rendering the page on the server upon the receival of a request, the page is already rendered in the server, waiting to be served to the client.</p>
                    <hr />
                    <h3>SPA (Single-Page Application)</h3>
                    <p>With SPA, the server provides the user with an empty HTML page and Javascript.When the browser receives the HTML + Javascript, it loads the Javascript. Once loaded, the JS takes place and, through a set of operations in the DOM, renders the necessary components to the page. The routing is then handled by the browser itself, not hitting the server. This is usually done through a frontend framework (or library) like React, Vue or Angular.</p>
                    <hr />
                    <h3>Server-side rendering (SSR and SSG) vs Client-side rendering (SPA)</h3>
                    <h4>Note: in this section, when I mention SSR I mean both SSR and SSG, and CSR I mean SPA.</h4>
                    <ul>
                        <li>SSR allows better SEO (Search Engine Optimization) because the content doesn't have to be loaded by Javascript like in CSR, so the search engine's web crawlers can directly parse the information.</li>
                        <li>SSR is better for slow connections because the HTML is immediately provided, whereas in CSR the user sees a blank page until the Javascript is loaded and renders the page's content.</li>
                        <li>SSR allows seeing content with Javascript disabled.</li>
                        <li>SSR first load is usually faster because it doesn't need to fetch the whole website in a Javascript bundle as CSR does</li>
                        <li>CSR is faster after the first load since there are no server requests to change pages, which makes it insanely fast.</li>
                        <li>CSR provides a better UX (user experience) because it gives a native-app feel to the page.</li>
                    </ul>
                    <hr />
                    <h3>When to use what(examples)?</h3>
                    <ul>
                        <li>The documentation website - SSG</li>
                        <li>The blog - SSR</li>
                        <li>The CRM (Customer Relationship Manager) - SPA</li>
                    </ul>
                </div>
                :
                <div>
                    <h2>Шаблоны веб-дизайна — SSR, SSG и SPA</h2>
                    <hr />
                    <h3>SSR (Server-Side Rendering)</h3>
                    <p>В SSR при запросе веб-страницы она отображается на сервере, передается клиенту и, наконец, обрабатывается клиентом.</p>
                    <hr />
                    <h3>SSG (Static-Site Generating)</h3>
                    <p>SSG имеет сходство с SSR. Страница также создается на сервере, однако страница отображается во время сборки. Таким образом, вместо отображения страницы на сервере после получения запроса страница уже отображается на сервере, ожидая доставки клиенту.</p>
                    <hr />
                    <h3>SPA (Single-Page Application)</h3>
                    <p>При использовании SPA сервер предоставляет пользователю пустую HTML-страницу и Javascript. Когда браузер получает HTML + Javascript, он загружает Javascript. После загрузки JS запускается и через набор операций в DOM отображает необходимые компоненты на странице. Затем маршрутизация обрабатывается самим браузером, не затрагивая сервер. Обычно это делается с помощью внешней среды (или библиотеки), такой как React, Vue или Angular.</p>
                    <hr />
                    <h3>Server-side rendering (SSR and SSG) vs Client-side rendering (SPA)</h3>
                    <h4>Примечание: в этом разделе, когда я упоминаю SSR, я имею в виду как SSR, так и SSG, а CSR я имею в виду SPA.</h4>
                    <ul>
                        <li>SSR обеспечивает лучшую SEO (поисковую оптимизацию), поскольку контент не должен загружаться с помощью Javascript, как в CSR, поэтому веб-сканеры поисковой системы могут напрямую анализировать информацию.</li>
                        <li>SSR лучше подходит для медленных подключений, поскольку HTML предоставляется сразу, тогда как в CSR пользователь видит пустую страницу до тех пор, пока не загрузится Javascript и не отобразит содержимое страницы.</li>
                        <li>SSR позволяет просматривать контент с отключенным Javascript.</li>
                        <li>Первая загрузка SSR обычно выполняется быстрее, потому что не нужно загружать весь веб-сайт в пакете Javascript, как это делает CSR</li>
                        <li>CSR работает быстрее после первой загрузки, так как нет запросов к серверу на изменение страниц, что делает его безумно быстрым.</li>
                        <li>CSR обеспечивает лучший UX (пользовательский опыт), поскольку создает ощущение нативного приложения на странице.</li>
                    </ul>
                    <hr />
                    <h3>Когда что использовать(примеры)?</h3>
                    <ul>
                        <li>Веб-сайт документации — SSG</li>
                        <li>Блог - SSR</li>
                        <li>CRM (менеджер по работе с клиентами) - SPA</li>
                    </ul>
                </div>
            }

        </div>
    );
};

export default WebDesignPatterns;