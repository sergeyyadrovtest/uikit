(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var MenuUserPageSpec = React.createClass({displayName: "MenuUserPageSpec",

        render: function(){

            return (

                React.createElement(Spec, {title: "menu user page(css)", anchor: "core:menuUserPage", group: "menu"}, 
                    React.createElement("p", null, "Меню пользователя страницы."), 

                    React.createElement("div", {className: "uk-overflow-container"}, 
                        React.createElement("code", null, "Spec: uimzr/spec/menu/menuUserPage/MenuUserPageSpec.jsx"), " ", React.createElement("br", null), 
                        React.createElement("code", null, "Less: themes/default/mzr-style/mzr-menu-user-page.less")
                    ), 



                    React.createElement("h3", null, "Тех. задание."), 
                    React.createElement("p", null, "Реализовать 3 меню. ", React.createElement("a", {href: "http://malno3.axshare.com/#p=menu-user-page__05-05-2015_", target: "_blank"}, "Скришоты меню")), 
                    React.createElement("p", null)



                )

            );

        }
    });
    return MenuUserPageSpec;

}));
