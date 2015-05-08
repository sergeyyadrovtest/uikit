(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['uimzr/components/news/Pagination'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory( require('uimzr/components/news/Pagination'));
    }
}(this, function (Pagination) {

    var NewsList = React.createClass({

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
                        <a className="el-item" href={oElement.url} key={'list_item_'+nIndex}>
                            <img src={oElement.img}/>
                            <span className="el-title">{oElement.title}</span>
                        </a>
                    );
                });
            };


            return ( <div className="mzr-news-list">
                <h1 className="mzr-news-list_header">{this.props.title}</h1>
                <div className="mzr-news-list_items">
                    {lListOfNews}
                </div>
                <div className="mzr-news-list_pagination">
                    <Pagination total={this.props.pagination.total} current={this.props.pagination.current} triggerEvent={this.props.triggerEvent}/>
                </div>
            </div>);
        }
    });
    return NewsList;

}));