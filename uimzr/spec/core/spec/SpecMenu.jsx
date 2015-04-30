(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['uimzr/lib/Events'], factory);
    } else if (typeof exports === 'object') {

        module.exports = factory(require('uimzr/lib/Events'));
    }
}(this, function (Events) {



    var SpecMenu = React.createClass({

        propTypes: {


        },

        getInitialState: function(){
            return {groups: [
                {group: 'core', specks: [] },
                {group: 'menu', specks: [] }
            ]};
        },

        getDefaultProps: function(){

            return {

            };
        },

        onAddSpeck: function(oParams){


            var oldState = this.state.groups;
            for(var i=0; i<oldState.length; i++){
                var lGroup = oldState[i];
                if(lGroup.group == oParams.group){
                    lGroup.specks.push(oParams);
                }
            }
            this.setState({groups: oldState});
            //console.log(oParams, oldState);
        },


        componentWillMount:function(){
            Events.on('uimzr:Spec:addSpeck', this.onAddSpeck);
        },

        componentDidMount:function(){

        },
        componentDidUpdate:function(){

        },

        render: function(){


            var lMenu = [];

            for(var i=0; i<this.state.groups.length; i++){
                var lGroup = this.state.groups[i];
                var lSumMenu= [];
                lSumMenu.push(<li key={0}><a href={"#"+lGroup.group}>{lGroup.group}</a>:</li>);
                for(var j=0; j < lGroup.specks.length; j++){
                    lSumMenu.push(<li key={j+1}><a href={"#"+lGroup.specks[j].anchor}>{lGroup.specks[j].title}</a></li>);
                }
                lMenu.push(<ul key={i+25} className="uk-subnav uk-subnav-line">{lSumMenu}</ul>);
            }

            return (
                <div className="uk-container uk-width-1-1 uk-container-center">
                    <div className="mzr-block">
                        <div className="mzr-block-header">Компоненты: css, jsx js; общие библиотеки; style guid</div>
                        <div className="mzr-block-content">{lMenu}</div>
                    </div>
                </div>);
        }
    });
    return SpecMenu;

}));