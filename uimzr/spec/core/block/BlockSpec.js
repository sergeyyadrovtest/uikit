(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var BlockSpec = React.createClass({displayName: "BlockSpec",


        render: function(){

            return (

                React.createElement(Spec, {title: "Block (css)", anchor: "core:block", group: "core"}, 


                    React.createElement("p", null, "Является основным блоком отображения контента."), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-block.less"), 
                    React.createElement("p", null, "Примеры:"), 
                    React.createElement("section", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Заголовок"), 
                        React.createElement("div", {className: "mzr-block-content"}, 

                            React.createElement(Spec.Prety, null, 
                                React.createElement("div", {className: "mzr-block"}, 
                                    React.createElement("div", {className: "mzr-block-header"}, "Заголовок блока"), 
                                    React.createElement("div", {className: "mzr-block-content"}, "контент ...")
                                )
                            )

                        )
                    ), 

                    React.createElement("h3", null, "ТЗ: реализовать mzr-block-image-menu"), 
                    React.createElement("a", {href: "http://malno3.axshare.com/#p=user-charts-menu__05-05-2015_", target: "_blank"}, "Скришоты меню"), 
                    React.createElement("p", null, "Картинки уже встроены в css. Классы картинок: .mzr-icon-calorie-diagram, .mzr-icon-calorie-balans-chart-period, .mzr-icon-PFC-day-diagram, .mzr-icon-nutrients-diagram, .mzr-icon-rating-nutrients-chart-period, .mzr-icon-weight-chart"), 
                    React.createElement("p", null, "Markup:"), 
                    React.createElement(Spec.Prety, null, 
                        React.createElement("div", {className: "mzr-block"}, 
                            React.createElement("div", {className: "mzr-block-header"}, "Заголовок блока"), 
                            React.createElement("div", {className: "mzr-block-content"}, "контент ..."), 
                            React.createElement("div", {className: "mzr-block-image-menu"}, 
                                "... здесь меню ввиде картинок ..."
                            )
                        )
                    )

                )

            );

        }
    });
    return BlockSpec;

}));
