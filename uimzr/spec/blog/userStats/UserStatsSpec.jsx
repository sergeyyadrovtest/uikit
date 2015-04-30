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
                        <p>.mzr-user-stats</p>
                        <img src="/uimzr/spec/blog/userStats/image/mzr-user-stats.png"/>


                    </div>

                </Spec>

            );

        }
    });
    return UserStatsSpec;

}));
