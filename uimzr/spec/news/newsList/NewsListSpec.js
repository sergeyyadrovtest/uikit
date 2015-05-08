(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec','uimzr/components/news/Pagination', 'uimzr/components/news/NewsList'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'), require('uimzr/components/news/Pagination'), require('uimzr/components/news/NewsList'));
    }
}(this, function (Spec,Pagination, NewsList) {


    var NewsListSpec = React.createClass({displayName: "NewsListSpec",

        render: function(){

            return (

                React.createElement(Spec, {title: "news list (css, jsx)", anchor: "blog:userStats", group: "news"}, 
                    React.createElement("p", null, "Список новостей."), 
                    React.createElement("code", null, "Spec: uimzr/spec/news/newsList/NewsListSpec.jsx"), React.createElement("br", null), 
                    React.createElement("code", null, "Less: themes/default/mzr-style/mzr-news-list.less"), 

                    React.createElement("p", null, "Пример css:"), 
                    React.createElement("div", {className: "mzr-news-list"}, 
                        React.createElement("h1", {className: "mzr-news-list_header"}, "База знаний"), 
                        React.createElement("div", {className: "mzr-news-list_items"}, 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            ), 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            ), 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            ), 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            ), 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            ), 

                            React.createElement("a", {className: "el-item"}, 
                                React.createElement("img", {src: "http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg"}), 
                                React.createElement("span", {className: "el-title"}, "Можно ли не худеть, потребляя 1200 ккал", '?')
                            )
                        ), 
                        React.createElement("div", {className: "mzr-news-list_pagination"}, 
                            React.createElement("ul", {className: "uk-pagination"}, 
                                React.createElement("li", {className: "uk-disabled"}, React.createElement("span", null, React.createElement("i", {className: "uk-icon-angle-double-left"}))), 
                                React.createElement("li", {className: "uk-active"}, React.createElement("span", null, "1")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "2")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "3")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "4")), 
                                React.createElement("li", null, React.createElement("span", null, "...")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, "20")), 
                                React.createElement("li", null, React.createElement("a", {href: "#"}, React.createElement("i", {className: "uk-icon-angle-double-right"})))
                            )
                        )
                    ), 

                    React.createElement("p", null, "Пример jsx Pagination:"), 




                    React.createElement(Pagination, {total: 2, current: 1}), 
                    React.createElement(Pagination, {total: 2, current: 2}), 
                    React.createElement(Pagination, {total: 3, current: 1}), 
                    React.createElement(Pagination, {total: 3, current: 2}), 
                    React.createElement(Pagination, {total: 3, current: 3}), 
                    React.createElement(Pagination, {total: 5, current: 1}), 

                    React.createElement(Pagination, {total: 5, current: 5}), 
                    React.createElement(Pagination, {total: 5, current: 4}), 
                    React.createElement(Pagination, {total: 5, current: 3}), 
                    React.createElement(Pagination, {total: 6, current: 3}), 
                    React.createElement(Pagination, {total: 7, current: 3}), 
                    React.createElement(Pagination, {total: 8, current: 3}), 
                    React.createElement(Pagination, {total: 20, current: 4}), 
                    React.createElement(Pagination, {total: 1000, current: 800}), 
                    React.createElement(Pagination, {total: 1000, current: 1000}), 
                    React.createElement("p", null, "Пример jsx:"), 


                    React.createElement(NewsList, {title: "База знаний", list: [
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'},
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'},
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'}
                    ], 
                        pagination: {total:50, current:2}, 
                        triggerEvent: function(pEventName, nPage){ console.log(pEventName, nPage)}}
                    )
                )

            );

        }
    });
    return NewsListSpec;

}));

