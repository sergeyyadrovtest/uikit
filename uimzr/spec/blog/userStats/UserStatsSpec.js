(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var UserStatsSpec = React.createClass({displayName: "UserStatsSpec",

        render: function(){

            return (


                React.createElement(Spec, {title: "user stats (css)", anchor: "blog:userStats", group: "blog"}, 
                    React.createElement("p", null, "Статистика пользователя."), 
                    React.createElement("code", null, "Spec: uimzr/spec/blog/userStats/UserStatsSpec.jsx"), React.createElement("br", null), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-user-stats.less"), 

                    React.createElement("div", null, 
                        React.createElement("h3", null, "ТЗ"), 
                        React.createElement("p", null, "Используем ", React.createElement("a", {href: "#core:block"}, ".mzr-block"), " для реализации этого компонента."), 
                        React.createElement("p", null, ".mzr-user-stats"), 
                        React.createElement("img", {src: "/uimzr/spec/blog/userStats/image/mzr-user-stats.png"})


                    )

                )

            );

        }
    });
    return UserStatsSpec;

}));
