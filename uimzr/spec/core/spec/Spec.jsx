(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'uimzr/lib/Events',
            'uimzr/spec/core/spec/SpecGrid3Column',
            'uimzr/spec/core/spec/SpecGridClearFix',
            'uimzr/spec/core/spec/SpecGridContent',
            'uimzr/spec/core/spec/SpecGridLeftSide',
            'uimzr/spec/core/spec/SpecGridRightSide',
            'uimzr/spec/core/spec/SpecPretyHtml'
        ], factory);
    } else if (typeof exports === 'object') {

        module.exports = factory(
            require('uimzr/lib/Events'),
            require('uimzr/spec/core/spec/SpecGrid3Column'),
            require('uimzr/spec/core/spec/SpecGridClearFix'),
            require('uimzr/spec/core/spec/SpecGridContent'),
            require('uimzr/spec/core/spec/SpecGridLeftSide'),
            require('uimzr/spec/core/spec/SpecGridRightSide'),
            require('uimzr/spec/core/spec/SpecPretyHtml')
        );
    }
}(this, function (Events, SpecGrid3Column, SpecGridClearFix, SpecGridContent, SpecGridLeftSide, SpecGridRightSide, SpecPretyHtml) {

    var Spec = React.createClass({

        propTypes: {

            title: React.PropTypes.string.isRequired,
            anchor: React.PropTypes.string.isRequired,
            group: React.PropTypes.oneOf(['core', 'menu', 'blog', 'news']).isRequired,
            grid: React.PropTypes.oneOf('3').isRequired

        },

        getDefaultProps: function(){

            return {
                group: 'core',
                grid: '3'
            };
        },


        componentDidMount:function(){

            Events.trigger('uimzr:Spec:addSpeck', {title: this.props.title, anchor: this.props.anchor, group: this.props.group});

            //$('pre code').each(function(i, block) {
            //   // hljs.highlightBlock(block);
            //});


           // console.log(React.findDOMNode(this).innerHTML);
        },
        componentDidUpdate:function(){
            //$('pre code').each(function(i, block) {
            // //   hljs.highlightBlock(block);
            //});
        },

        render: function(){


            var lStyle = {
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: '#6e7487',
                marginTop: 25,
                paddingTop: 25
            };
            return (<div style={lStyle}>

                <SpecGrid3Column>

                    <SpecGridContent>
                        <h1 id={this.props.anchor}>{this.props.title} <a href={'#'+this.props.anchor}>{'#'}</a></h1>
                        {this.props.children}
                    </SpecGridContent>

                    <SpecGridLeftSide></SpecGridLeftSide>
                    <SpecGridClearFix></SpecGridClearFix>
                    <SpecGridRightSide></SpecGridRightSide>

                </SpecGrid3Column>


            </div>);

        }
    });

    Spec.Prety = SpecPretyHtml;
    return Spec;

}));