(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var BlockSpec = React.createClass({


        render: function(){

            return (

                <Spec title="Block (css)" anchor="core:block" group="core">


                    <p>Является основным блоком отображения контента.</p>
                    <code>Less: themes/default/mzr-style/mzr-block.less</code>
                    <p>Примеры:</p>
                    <section className="mzr-block">
                        <div className="mzr-block-header">Заголовок</div>
                        <div className="mzr-block-content">

                            <Spec.Prety>
                                <div className="mzr-block">
                                    <div className="mzr-block-header">Заголовок блока</div>
                                    <div className="mzr-block-content">контент ...</div>
                                </div>
                            </Spec.Prety>

                        </div>
                    </section>

                    <h3>ТЗ: реализовать mzr-block-image-menu</h3>
                    <a href="http://malno3.axshare.com/#p=user-charts-menu__05-05-2015_" target="_blank">Скришоты меню</a>
                    <p>Картинки уже встроены в css. Классы картинок: .mzr-icon-calorie-diagram, .mzr-icon-calorie-balans-chart-period, .mzr-icon-PFC-day-diagram, .mzr-icon-nutrients-diagram, .mzr-icon-rating-nutrients-chart-period, .mzr-icon-weight-chart</p>
                    <p>Markup:</p>
                    <Spec.Prety>
                        <div className="mzr-block">
                            <div className="mzr-block-header">Заголовок блока</div>
                            <div className="mzr-block-content">контент ...</div>
                            <div className="mzr-block-image-menu">
                                ... здесь меню ввиде картинок ...
                            </div>
                        </div>
                    </Spec.Prety>

                </Spec>

            );

        }
    });
    return BlockSpec;

}));
