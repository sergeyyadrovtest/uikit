(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    }
}(this, function () {

    var Pagination = React.createClass({displayName: "Pagination",

        propTypes: {
            total: React.PropTypes.number.isRequired,
            current: React.PropTypes.number.isRequired,
            triggerEvent: React.PropTypes.func

        },

        getDefaultProps: function(){

            return {
                total: 1,
                current: 1
            };
        },

        onClick: function(pNumber){
            if(this.props.triggerEvent){
                this.props.triggerEvent("pagination", pNumber);
            }else{
                console.log("pagination", pNumber);
            }
        },

        render: function(){

            if(this.props.total==0 || this.props.total < this.props.current || this.props.current <= 0 || this.props.total <= 0){
                return ( React.createElement("ul", {className: "uk-pagination"}));
            }

            var lPagination = [];

            var lArrayOfPage = [];


            var that = this;
            var addPage = function(nPage){
                if(nPage>0 && nPage<=that.props.total){
                    var lFind = false;
                    for(var j=0; j<lArrayOfPage.length; j++){
                        if(lArrayOfPage[j] === nPage){
                            lFind = true;
                            break;
                        }
                    }
                    if(lFind === false){
                        lArrayOfPage.push(nPage);
                    }
                }
            };
            addPage(1);
            addPage(this.props.current-2);
            addPage(this.props.current-1);
            addPage(this.props.current);
            addPage(this.props.current+1);
            addPage(this.props.current+2);
            addPage(this.props.total);


            for(var nIndex=0; nIndex<lArrayOfPage.length; nIndex++){
                var nElement = lArrayOfPage[nIndex];
                var lDelta = nIndex>0 && (nElement - lArrayOfPage[nIndex-1]);
                if(lDelta > 2){
                    lPagination.push (React.createElement("li", {key: 'empty'+nIndex}, React.createElement("span", null, "...")));
                }else if(lDelta === 2){
                    lPagination.push (React.createElement("li", {key: 'delta'+nIndex}, React.createElement("a", {onClick: this.onClick.bind(null, nElement-1)}, nElement-1)))
                }

                if(this.props.current === nElement){
                    lPagination.push (React.createElement("li", {key: nIndex, className: "uk-active"}, React.createElement("span", null, this.props.current)));
                }else{
                    lPagination.push (React.createElement("li", {key: nIndex}, React.createElement("a", {onClick: this.onClick.bind(null, nElement)}, nElement)));
                }
            }


            return ( React.createElement("ul", {className: "uk-pagination"}, 
                lPagination
            ));
        }
    });
    return Pagination;

}));