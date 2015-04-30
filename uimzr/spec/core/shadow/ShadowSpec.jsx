(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var ShadowSpec = React.createClass({


        render: function(){
            return (

                <Spec title="shadow (css)" anchor="core:shadow" group="core">


                    <p>Тень для блоков.</p>
                    <code>Less: themes/default/mzr-style/mzr-shadow.less</code>
                    <section className="mzr-block">
                        <div className="mzr-block-header">Пример</div>
                        <div className="mzr-block-content">

                            <div className="mzr-shadow" style={{width:100, height:50}}><code>.mzr-shadow</code></div>

                        </div>
                    </section>


                </Spec>

            );

        }
    });
    return ShadowSpec;

}));
