(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var ColorSpec = React.createClass({displayName: "ColorSpec",


        render: function(){





            var lStyleWidth = {width:90};
            return (

                React.createElement(Spec, {title: "Цвета (css)", anchor: "core:color", group: "core"}, 

                    React.createElement("code", null, "Less: themes/default/variables.less"), 

                    React.createElement("div", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Название переменных в Less"), 

                        React.createElement("div", {className: "mzr-block-content"}, 
                            React.createElement("div", {className: "uk-overflow-container"}, 
                                React.createElement("table", {className: "uk-table uk-text-nowrap"}, 
                                    React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "Example"), 
                                            React.createElement("th", null, "Less"), 
                                            React.createElement("th", null, "Description")
                                        )
                                    ), 
                                    React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-red-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-red")), 
                                            React.createElement("td", null, "Основной брендовый цвет сайта.")
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-turquoise-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-turquoise")), 
                                            React.createElement("td", null, "Допонительный брендовый цвет сайта (бирюзовый).")
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-turquoise-lighter-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-turquoise-lighter")), 
                                            React.createElement("td", null)
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-primary-background"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-primary-background")), 
                                            React.createElement("td", null, "Фон сайта, цвет рамки таблиц.")
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-gray-dark-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-gray-dark")), 
                                            React.createElement("td", null)
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-gray-dark-hover-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-gray-dark-hover")), 
                                            React.createElement("td", null)
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-gray-lite-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-gray-lite")), 
                                            React.createElement("td", null)
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-gray-border-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-gray-border")), 
                                            React.createElement("td", null)
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-text-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-text")), 
                                            React.createElement("td", null, "Основной цвет текста")
                                        ), 

                                        React.createElement("tr", null, 
                                            React.createElement("td", null, React.createElement("button", {style: lStyleWidth, className: "uk-button mzr-color-text-mute-bg"})), 
                                            React.createElement("td", null, React.createElement("code", null, "@mzr-color-text-mute")), 
                                            React.createElement("td", null, "Приглушенный цвет текста")
                                        )




                                    )
                                )
                            )

                        )
                    )



                )

            );

        }
    });
    return ColorSpec;

}));
