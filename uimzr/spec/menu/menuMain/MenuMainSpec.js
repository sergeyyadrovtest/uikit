(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {

    var menuMainSpec = React.createClass({displayName: "menuMainSpec",

        render: function(){


            //<li className="uk-parent" data-uk-dropdown>
            //    <a href=""><i className="uk-icon-ellipsis-h "></i></a>
            //    <div className="uk-dropdown uk-dropdown-navbar">
            //        <ul className="uk-nav uk-nav-navbar">
            //            <li><a href="#">Item</a></li>
            //            <li><a href="#">Another item</a></li>
            //            <li className="uk-nav-header">Header</li>
            //            <li><a href="#">Item</a></li>
            //            <li><a href="#">Another item</a></li>
            //            <li className="uk-nav-divider"></li>
            //            <li><a href="#">Separated item</a></li>
            //        </ul>
            //    </div>
            //</li>
            //
            //<div className="uk-navbar-content">
            //<a className="uk-button uk-button-primary mzr-navbar-button"><i className="uk-icon-navicon"></i><div>Меню</div></a>
            //</div>

            
            
            return (

                React.createElement("div", null, 
                    React.createElement(Spec, {title: "menu main (css)", anchor: "core:menuMain", group: "menu"}, 
                        React.createElement("p", null, "Меню страницы для не авторизованного пользователя.")
                    ), 
                    React.createElement("nav", {className: "uk-navbar"}, 

                        React.createElement("a", {href: "/", className: "uk-navbar-brand mzr-navbar-logo"}), 
                        React.createElement("div", {className: "uk-navbar-content"}, 
                            React.createElement("a", {className: "uk-button uk-button-primary mzr-navbar-button mzr-navbar-button-oneline"}, React.createElement("i", {className: "uk-icon-hand-o-right"}), "Начать программу похудения")
                        ), 
                        React.createElement("ul", {className: "uk-navbar-nav"}, 

                            React.createElement("li", null, 
                                React.createElement("a", {href: "/people/user/"}, "Моя страница")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line"}), 
                            React.createElement("li", null, 
                                React.createElement("a", {href: "/people/blogs/success/"}, "Истории успеха")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line"}), 
                            React.createElement("li", null, 
                                React.createElement("a", {href: "/people/blogs/foodDiary/"}, "Дневники")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line mzr-navbar-hide-1000"}), 
                            React.createElement("li", {className: "mzr-navbar-hide-1000"}, 
                                React.createElement("a", {href: "/people/blogs/recipe/"}, "Рецепты")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line mzr-navbar-hide-1200"}), 
                            React.createElement("li", {className: "mzr-navbar-hide-1200"}, 
                                React.createElement("a", {href: "/table_calorie/"}, "Таблицы калорийности")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line mzr-navbar-hide-1300"}), 
                            React.createElement("li", {className: "mzr-navbar-hide-1300"}, 
                                React.createElement("a", {href: "/article/"}, "Статьи")
                            ), 
                            React.createElement("li", {className: "mzr-navbar-nav-line mzr-navbar-hide-1350"}), 
                            React.createElement("li", {className: "mzr-navbar-hide-1350"}, 
                                React.createElement("a", {href: "/health_diet/"}, "МЗР")
                            )

                        ), 

                        React.createElement("div", {className: "uk-navbar-content uk-navbar-flip "}, 
                            React.createElement("a", {className: "uk-button uk-button-primary mzr-navbar-button"}, React.createElement("i", {className: "uk-icon-sign-in"}), React.createElement("div", null, "Войти"))

                        )

                    )
                )


            );

        }
    });
    return menuMainSpec;

}));
