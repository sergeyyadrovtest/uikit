(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var ShadowSpec = React.createClass({displayName: "ShadowSpec",


        render: function(){
            return (

                React.createElement(Spec, {title: "shadow (css)", anchor: "core:shadow", group: "core"}, 


                    React.createElement("p", null, "Тень для блоков."), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-shadow.less"), 
                    React.createElement("section", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Пример"), 
                        React.createElement("div", {className: "mzr-block-content"}, 

                            React.createElement("div", {className: "mzr-shadow", style: {width:100, height:50}}, React.createElement("code", null, ".mzr-shadow"))

                        )
                    )


                )

            );

        }
    });
    return ShadowSpec;

}));
