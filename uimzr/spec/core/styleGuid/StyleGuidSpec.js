(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var StyleGuideSpec = React.createClass({displayName: "StyleGuideSpec",


        render: function(){

            return (

                React.createElement(Spec, {title: "Style guide", anchor: "core:style-guide", group: "core"}, 


                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "JavaScript"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("ul", null, 
                                React.createElement("li", null, "Придерживаться style guide от  airbnb ", React.createElement("a", {href: "https://github.com/airbnb/javascript", target: "_blank"}, 'https://github.com/airbnb/javascript')), 
                                React.createElement("li", null, "Используем ", React.createElement("a", {href: "https://github.com/umdjs/umd", target: "_blank"}, "UMD"), " (Universal Module Definition). Шаблон для react компонентов: ", React.createElement("code", null, "uimzr/spec/jsxComponent.jsx")), 
                                React.createElement("li", null, "Компоненты реализуем на ", React.createElement("a", {href: "http://facebook.github.io/react/docs/getting-started.html", target: "_blank"}, "React.js"), ".")
                            )

                        )
                    ), 



                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "CSS"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("ul", null, 
                                React.createElement("li", null, "Пишем все на less"), 
                                React.createElement("li", null, "Максимально используем css framework ", React.createElement("a", {href: "http://getuikit.com/"}, "getuikit"), " (core).", 
                                    React.createElement("ul", null, 
                                        React.createElement("li", null, "Родные компоненты меняем через default тему: ", React.createElement("code", null, "themes/default")), 
                                        React.createElement("li", null, "Less для новых компонентов располагаем здесь ", React.createElement("code", null, "themes/default/mzr-style"), "." + ' ' +
                                            "Подключаем их в ", React.createElement("code", null, "themes/default/uikit.less"))
                                    )
                                ), 

                                React.createElement("li", null, "Префикс для css классов ", React.createElement("code", null, "mzr-")), 
                                React.createElement("li", null, "Under score нотация наименования классов ", React.createElement("code", null, "mzr-super-component")), 
                                React.createElement("li", null, "Рекомендуется использовать ", React.createElement("a", {href: "https://ru.bem.info/", target: "_blank"}, "BEM"), " методологию в наименовании классов. ", React.createElement("code", null, "mzr-super-block_element--modificator-red")
                                )
                            )
                        )
                    ), 


                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Поддержка браузеров"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("div", {className: "uk-margin", "data-uk-margin": ""}, 
                                React.createElement("div", {className: "uk-thumbnail"}, 
                                    React.createElement("img", {src: "https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png"}), 
                                    React.createElement("div", {className: "uk-thumbnail-caption"}, "Latest ✔")
                                ), 

                                React.createElement("div", {className: "uk-thumbnail"}, 
                                    React.createElement("img", {src: "https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png"}), 
                                    React.createElement("div", {className: "uk-thumbnail-caption"}, "Latest ✔")
                                ), 

                                React.createElement("div", {className: "uk-thumbnail"}, 
                                    React.createElement("img", {src: "https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png"}), 
                                    React.createElement("div", {className: "uk-thumbnail-caption"}, "7.1+ ✔")
                                ), 

                                React.createElement("div", {className: "uk-thumbnail"}, 
                                    React.createElement("img", {src: "https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png"}), 
                                    React.createElement("div", {className: "uk-thumbnail-caption"}, "css: 9+ ✔, js: 11+")
                                ), 

                                React.createElement("div", {className: "uk-thumbnail"}, 
                                    React.createElement("img", {src: "https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png"}), 
                                    React.createElement("div", {className: "uk-thumbnail-caption"}, "Latest ✔")
                                )
                            )
                        )
                    ), 



                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Адаптивная верстка"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("ul", null, 
                                React.createElement("li", null, "Делаем адаптивную верстку."), 
                                React.createElement("li", null, "Если width компонента не указана в ТЗ, значит он растягивается на всю длину."), 
                                React.createElement("li", null, "В Т.З. дается 3 картинки (если иное не указано), т.е. как компонент должен выглядеть на разных экранах.", 
                                    React.createElement("ul", null, 
                                        React.createElement("li", null, "до 733px включительно"), 
                                        React.createElement("li", null, "480 px"), 
                                        React.createElement("li", null, "320 px")
                                    )
                                )
                            )
                        )
                    ), 



                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "WorkFlow"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("ul", null, 

                                React.createElement("li", null, "create fork"), 
                                React.createElement("li", null, "cd uikit"), 
                                React.createElement("li", null, "npm install"), 
                                React.createElement("li", null, "Под каждый компонент/тз создаете ветку с соотвествующим названием."), 
                                React.createElement("li", null, "gulp sync -" + ' ' +
                                    "Открываем ", React.createElement("a", {href: "http://localhost:3000/docs/customizer.html", target: "_blank"}, 'http://localhost:3000/docs/customizer.html'), " и ", React.createElement("a", {href: "http://localhost:3000/uimzr/index.html", target: "_blank"}, 'http://localhost:3000/uimzr/index.html'), " и" + ' ' +
                                    "The browser window will reload anytime you modify a source file."), 
                                React.createElement("li", null, "gulp watch-react-jsx-to-js - компиляция jsx to js"), 
                                React.createElement("li", null, "develop"), 
                                React.createElement("li", null, "pull requirest")
                            )
                        )
                    )


                )
            );

        }
    });
    return StyleGuideSpec;

}));
