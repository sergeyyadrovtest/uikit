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

                </Spec>

            );

        }
    });
    return BlockSpec;

}));
