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
                    <code>Spec: uimzr/spec/menu/menuUserPage/MenuUserPageSpec.jsx</code>
                    <code>Less: themes/default/mzr-style/mzr-menu-user-page.less</code>


                    <h3>Тех. задание.</h3>
                    <p>Реализовать 3 меню.</p>
                    <div id="core:menuUser:spec">
                        <p>mzr-menu-user-page-owner</p>
                        <img src="/uimzr/spec/menu/menuUserPage/image/menu-user-page-owner.png"/>
                        <p>mzr-menu-user-page-guest</p>
                        <img src="/uimzr/spec/menu/menuUserPage/image/mzr-menu-user-page-guest.png"/>
                        <p>mzr-menu-user-page-guest-short</p>
                        <img src="/uimzr/spec/menu/menuUserPage/image/menu-user-page-guest-short.png"/>
                    </div>


                </Spec>

            );

        }
    });
    return MenuUserPageSpec;

}));
