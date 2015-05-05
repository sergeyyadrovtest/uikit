(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var UserStatsSpec = React.createClass({

        render: function(){

            return (


                <Spec title="user stats (css)" anchor="blog:userStats" group="blog">
                    <p>Статистика пользователя.</p>
                    <code>Spec: uimzr/spec/blog/userStats/UserStatsSpec.jsx</code><br/>
                    <code>Less: themes/default/mzr-style/mzr-user-stats.less</code>

                    <div>
                        <h3>ТЗ</h3>
                        <p>Используем <a href="#core:block">.mzr-block</a> для реализации этого компонента.</p>
                        <a href="http://malno3.axshare.com/#p=blog_user-stats__05-05-2015_" target="_blank">Скришоты меню</a>


                    </div>

                </Spec>

            );

        }
    });
    return UserStatsSpec;

}));
