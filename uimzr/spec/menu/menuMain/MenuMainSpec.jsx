(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {

    var menuMainSpec = React.createClass({

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

                <div>
                    <Spec title="menu main (css)" anchor="core:menuMain" group="menu">
                        <p>Меню страницы для не авторизованного пользователя.</p>
                    </Spec>
                    <nav className="uk-navbar">

                        <a href="/" className="uk-navbar-brand mzr-navbar-logo"></a>
                        <div className="uk-navbar-content">
                            <a className="uk-button uk-button-primary mzr-navbar-button mzr-navbar-button-oneline"><i className="uk-icon-hand-o-right"></i>Начать программу похудения</a>
                        </div>
                        <ul className="uk-navbar-nav">

                            <li>
                                <a href="/people/user/">Моя страница</a>
                            </li>
                            <li className="mzr-navbar-nav-line"></li>
                            <li>
                                <a href="/people/blogs/success/">Истории успеха</a>
                            </li>
                            <li className="mzr-navbar-nav-line"></li>
                            <li>
                                <a href="/people/blogs/foodDiary/">Дневники</a>
                            </li>
                            <li className="mzr-navbar-nav-line mzr-navbar-hide-1000"></li>
                            <li  className= "mzr-navbar-hide-1000">
                                <a href="/people/blogs/recipe/">Рецепты</a>
                            </li>
                            <li className="mzr-navbar-nav-line mzr-navbar-hide-1200"></li>
                            <li className= "mzr-navbar-hide-1200">
                                <a href="/table_calorie/">Таблицы калорийности</a>
                            </li>
                            <li className="mzr-navbar-nav-line mzr-navbar-hide-1300"></li>
                            <li className="mzr-navbar-hide-1300">
                                <a href="/article/">Статьи</a>
                            </li>
                            <li className="mzr-navbar-nav-line mzr-navbar-hide-1350"></li>
                            <li className="mzr-navbar-hide-1350">
                                <a href="/health_diet/">МЗР</a>
                            </li>

                        </ul>

                        <div className="uk-navbar-content uk-navbar-flip ">
                            <a className="uk-button uk-button-primary mzr-navbar-button"><i className="uk-icon-sign-in"></i><div>Войти</div></a>

                        </div>

                    </nav>
                </div>


            );

        }
    });
    return menuMainSpec;

}));
