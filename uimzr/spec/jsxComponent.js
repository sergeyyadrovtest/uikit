(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['b'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('b'));
    }
}(this, function (b) {

    var Component = React.createClass({displayName: "Component",

        propTypes: {


        },

        getDefaultProps: function(){

            return {

            };
        },

        componentDidMount:function(){

        },
        componentDidUpdate:function(){

        },

        render: function(){

            return (React.createElement("div", null));
        }
    });
    return Component;

}));