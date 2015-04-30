(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'uimzr/spec/core/spec/js-beautify/beautify-html'
        ], factory);
    } else if (typeof exports === 'object') {

        module.exports = factory(
            require('uimzr/spec/core/spec/js-beautify/beautify-html')
        );
    }
}(this, function (beautify) {

    var SpecPretyHtml = React.createClass({displayName: "SpecPretyHtml",

        componentDidMount:function(){

            hljs.highlightBlock(React.findDOMNode(this));

        },
        componentDidUpdate:function(){
            hljs.highlightBlock(React.findDOMNode(this));
        },


        render: function(){

            var lCode = React.renderToStaticMarkup(this.props.children);
            var lText =  beautify.html_beautify(lCode);
            return(React.createElement("pre", null, 
                React.createElement("code", null, lText)
            ));

        }
    });
    return SpecPretyHtml;

}));