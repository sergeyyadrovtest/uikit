(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var StyleGuideSpec = React.createClass({


        render: function(){

            return (

                <Spec title="Style guide" anchor="core:style-guide" group="core">


                    <div className="mzr-block">
                        <div className="mzr-block-header">JavaScript</div>

                        <div className="mzr-block-content">
                            <ul>
                                <li>Придерживаться style guide от  airbnb <a href="https://github.com/airbnb/javascript" target="_blank">{'https://github.com/airbnb/javascript'}</a></li>
                                <li>Используем <a href="https://github.com/umdjs/umd" target="_blank">UMD</a> (Universal Module Definition). Шаблон для react компонентов: <code>uimzr/spec/jsxComponent.jsx</code></li>
                                <li>Компоненты реализуем на <a href="http://facebook.github.io/react/docs/getting-started.html" target="_blank">React.js</a>.</li>
                            </ul>

                        </div>
                    </div>



                    <div className="mzr-block">
                        <div className="mzr-block-header">CSS</div>

                        <div className="mzr-block-content">
                            <ul>
                                <li>Пишем все на less</li>
                                <li>Максимально используем css framework <a href="http://getuikit.com/">getuikit</a> (core).
                                    <ul>
                                        <li>Родные компоненты меняем через default тему: <code>themes/default</code></li>
                                        <li>Less для новых компонентов располагаем здесь <code>themes/default/mzr-style</code>.
                                            Подключаем их в <code>themes/default/uikit.less</code></li>
                                    </ul>
                                </li>

                                <li>Префикс для css классов <code>mzr-</code></li>
                                <li>Under score нотация наименования классов <code>mzr-super-component</code></li>
                                <li>Рекомендуется использовать <a href="https://ru.bem.info/" target="_blank">BEM</a> методологию в наименовании классов. <code>mzr-super-block_element--modificator-red</code>

                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mzr-block">
                        <div className="mzr-block-header">Поддержка браузеров</div>

                        <div className="mzr-block-content">
                            <div className="uk-margin" data-uk-margin="">
                                <div className="uk-thumbnail">
                                    <img src="https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png" />
                                    <div className="uk-thumbnail-caption">Latest ✔</div>
                                </div>

                                <div className="uk-thumbnail">
                                    <img src="https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png" />
                                    <div className="uk-thumbnail-caption">Latest ✔</div>
                                </div>

                                <div className="uk-thumbnail">
                                    <img src="https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png" />
                                    <div className="uk-thumbnail-caption">7.1+ ✔</div>
                                </div>

                                <div className="uk-thumbnail">
                                    <img src="https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png" />
                                    <div className="uk-thumbnail-caption">css: 9+ ✔, js: 11+</div>
                                </div>

                                <div className="uk-thumbnail">
                                    <img src="https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png" />
                                    <div className="uk-thumbnail-caption">Latest ✔</div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="mzr-block">
                        <div className="mzr-block-header">Адаптивная верстка</div>

                        <div className="mzr-block-content">
                            <ul>
                                <li>Делаем адаптивную верстку.
                                <p>Тех. задание дается ввиде прототипа сделанного в приложение на Axure, доступного через интернет. При изменении ширина браузера будет меняться расположение элементов. </p>
                                </li>
                                <li>Если width компонента не указана в ТЗ, значит он растягивается на всю длину.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mzr-block">
                        <div className="mzr-block-header">Font icons</div>

                        <div className="mzr-block-content">
                            <ul>
                                <li>В проекте используется FontAwesome, уже встроенный в <a href="http://getuikit.com/docs/icon.html" target="_blank">uikit</a></li>
                                <li>Также flaticon. Это генерируемый иконочный шрифт сервисом <a href={'http://www.flaticon.com/'}>flaticon.com</a>.</li>

                            </ul>
                        </div>
                    </div>



                    <div className="mzr-block">
                        <div className="mzr-block-header">WorkFlow</div>

                        <div className="mzr-block-content">
                            <ul>

                                <li>create fork</li>
                                <li>cd uikit</li>
                                <li>npm install</li>
                                <li>Под каждый компонент/тз создаете ветку с соотвествующим названием.</li>
                                <li>gulp sync -
                                    Открываем <a href="http://localhost:3000/docs/customizer.html" target="_blank">{'http://localhost:3000/docs/customizer.html'}</a> и <a href="http://localhost:3000/uimzr/index.html" target="_blank">{'http://localhost:3000/uimzr/index.html'}</a> и
                                    The browser window will reload anytime you modify a source file.</li>
                                <li>gulp watch-react-jsx-to-js - компиляция jsx to js</li>
                                <li>develop</li>
                                <li>pull requirest</li>
                            </ul>
                        </div>
                    </div>


                </Spec>
            );

        }
    });
    return StyleGuideSpec;

}));
