(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var BlockSpec = React.createClass({displayName: "BlockSpec",


        render: function(){

            return (

                React.createElement(Spec, {title: "Block (css)", anchor: "core:block", group: "core"}, 


                    React.createElement("p", null, "Является основным блоком отображения контента."), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-block.less"), 
                    React.createElement("p", null, "Примеры:"), 
                    React.createElement("section", {className: "mzr-block"}, 
                        React.createElement("div", {className: "mzr-block-header"}, "Заголовок"), 
                        React.createElement("div", {className: "mzr-block-content"}, 

                            React.createElement(Spec.Prety, null, 
                                React.createElement("div", {className: "mzr-block"}, 
                                    React.createElement("div", {className: "mzr-block-header"}, "Заголовок блока"), 
                                    React.createElement("div", {className: "mzr-block-content"}, "контент ...")
                                )
                            )

                        )
                    )

                )

            );

        }
    });
    return BlockSpec;

}));
