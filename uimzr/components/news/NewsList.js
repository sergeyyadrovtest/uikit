(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['uimzr/components/news/Pagination'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory( require('uimzr/components/news/Pagination'));
    }
}(this, function (Pagination) {

    var NewsList = React.createClass({displayName: "NewsList",

        propTypes: {
            title: React.PropTypes.string.isRequired,

            list: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    url: React.PropTypes.string.isRequired,
                    title: React.PropTypes.string.isRequired,
                    img: React.PropTypes.string.isRequired
                })).isRequired,

            pagination: React.PropTypes.shape({
                total: React.PropTypes.number.isRequired,
                current: React.PropTypes.number.isRequired
            }).isRequired,

            triggerEvent: React.PropTypes.func.isRequired

        },

        getDefaultProps: function(){

            return {

            };
        },

        render: function(){

            var lListOfNews = [];
            if(this.props.list){
                lListOfNews = this.props.list.map(function(oElement, nIndex){
                    return (
                        React.createElement("a", {className: "el-item", href: oElement.url, key: 'list_item_'+nIndex}, 
                            React.createElement("img", {src: oElement.img}), 
                            React.createElement("span", {className: "el-title"}, oElement.title)
                        )
                    );
                });
            };


            return ( React.createElement("div", {className: "mzr-news-list"}, 
                React.createElement("h1", {className: "mzr-news-list_header"}, this.props.title), 
                React.createElement("div", {className: "mzr-news-list_items"}, 
                    lListOfNews
                ), 
                React.createElement("div", {className: "mzr-news-list_pagination"}, 
                    React.createElement(Pagination, {total: this.props.pagination.total, current: this.props.pagination.current, triggerEvent: this.props.triggerEvent})
                )
            ));
        }
    });
    return NewsList;

}));