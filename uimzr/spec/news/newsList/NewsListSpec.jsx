(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec','uimzr/components/news/Pagination', 'uimzr/components/news/NewsList'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'), require('uimzr/components/news/Pagination'), require('uimzr/components/news/NewsList'));
    }
}(this, function (Spec,Pagination, NewsList) {


    var NewsListSpec = React.createClass({

        render: function(){

            return (

                <Spec title="news list (css, jsx)" anchor="blog:userStats" group="news">
                    <p>Список новостей.</p>
                    <code>Spec: uimzr/spec/news/newsList/NewsListSpec.jsx</code><br/>
                    <code>Less: themes/default/mzr-style/mzr-news-list.less</code>

                    <p>Пример css:</p>
                    <div className="mzr-news-list">
                        <h1 className="mzr-news-list_header">База знаний</h1>
                        <div className="mzr-news-list_items">

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>

                            <a className="el-item">
                                <img src='http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'/>
                                <span className="el-title">Можно ли не худеть, потребляя 1200 ккал{'?'}</span>
                            </a>
                        </div>
                        <div className="mzr-news-list_pagination">
                            <ul className="uk-pagination">
                                <li className="uk-disabled"><span><i className="uk-icon-angle-double-left"></i></span></li>
                                <li className="uk-active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><span>...</span></li>
                                <li><a href="#">20</a></li>
                                <li><a href="#"><i className="uk-icon-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <p>Пример jsx Pagination:</p>




                    <Pagination total={2} current={1}></Pagination>
                    <Pagination total={2} current={2}></Pagination>
                    <Pagination total={3} current={1}></Pagination>
                    <Pagination total={3} current={2}></Pagination>
                    <Pagination total={3} current={3}></Pagination>
                    <Pagination total={5} current={1}></Pagination>

                    <Pagination total={5} current={5}></Pagination>
                    <Pagination total={5} current={4}></Pagination>
                    <Pagination total={5} current={3}></Pagination>
                    <Pagination total={6} current={3}></Pagination>
                    <Pagination total={7} current={3}></Pagination>
                    <Pagination total={8} current={3}></Pagination>
                    <Pagination total={20} current={4}></Pagination>
                    <Pagination total={1000} current={800}></Pagination>
                    <Pagination total={1000} current={1000}></Pagination>
                    <p>Пример jsx:</p>


                    <NewsList title="База знаний" list={[
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'},
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'},
                        {title:'Можно ли не худеть, потребляя 1200 ккал?', url:'/ff/', img:'http://upload-1f47061a063c9bb9706729066dc63a02.commondatastorage.googleapis.com/iblock/b04/b042a973a8184d20631d343c4e9083c5/5a3c5bd7bb0608d808e86360771cb2a7.jpg'}
                    ]}
                        pagination={{total:50, current:2}}
                        triggerEvent={function(pEventName, nPage){ console.log(pEventName, nPage)}}
                    />
                </Spec>

            );

        }
    });
    return NewsListSpec;

}));

