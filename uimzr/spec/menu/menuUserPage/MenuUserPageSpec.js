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
                    React.createElement("code", null, "Spec: uimzr/spec/menu/menuUserPage/MenuUserPageSpec.jsx"), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-menu-user-page.less"), 


                    React.createElement("h3", null, "Тех. задание."), 
                    React.createElement("p", null, "Реализовать 3 меню."), 
                    React.createElement("div", {id: "core:menuUser:spec"}, 
                        React.createElement("p", null, "mzr-menu-user-page-owner"), 
                        React.createElement("img", {src: "/uimzr/spec/menu/menuUserPage/image/menu-user-page-owner.png"}), 
                        React.createElement("p", null, "mzr-menu-user-page-guest"), 
                        React.createElement("img", {src: "/uimzr/spec/menu/menuUserPage/image/mzr-menu-user-page-guest.png"}), 
                        React.createElement("p", null, "mzr-menu-user-page-guest-short"), 
                        React.createElement("img", {src: "/uimzr/spec/menu/menuUserPage/image/menu-user-page-guest-short.png"})
                    )


                )

            );

        }
    });
    return MenuUserPageSpec;

}));
