(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var MenuUserPageSpec = React.createClass({

        render: function(){

            return (

                <Spec title="menu user page(css)" anchor="core:menuUserPage" group="menu">
                    <p>Меню пользователя страницы.</p>

                    <div className="uk-overflow-container">
                        <code>Spec: uimzr/spec/menu/menuUserPage/MenuUserPageSpec.jsx</code> <br/>
                        <code>Less: themes/default/mzr-style/mzr-menu-user-page.less</code>
                    </div>



                    <h3>Тех. задание.</h3>
                    <p>Реализовать 3 меню. <a href="http://malno3.axshare.com/#p=menu-user-page__05-05-2015_" target="_blank">Скришоты меню</a></p>
                    <p></p>



                </Spec>

            );

        }
    });
    return MenuUserPageSpec;

}));
