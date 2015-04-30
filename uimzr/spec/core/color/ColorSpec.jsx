(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Spec'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('Spec'));
    }
}(this, function (Spec) {


    var ColorSpec = React.createClass({


        render: function(){





            var lStyleWidth = {width:90};
            return (

                <Spec title="Цвета (css)" anchor="core:color" group="core">

                    <code>Less: themes/default/variables.less</code>

                    <div className="mzr-block">
                        <div className="mzr-block-header">Название переменных в Less</div>

                        <div className="mzr-block-content">
                            <div className="uk-overflow-container">
                                <table className="uk-table uk-text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Example</th>
                                            <th>Less</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-red-bg"></button></td>
                                            <td><code>@mzr-color-red</code></td>
                                            <td>Основной брендовый цвет сайта.</td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-turquoise-bg"></button></td>
                                            <td><code>@mzr-color-turquoise</code></td>
                                            <td>Допонительный брендовый цвет сайта (бирюзовый).</td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-turquoise-lighter-bg"></button></td>
                                            <td><code>@mzr-color-turquoise-lighter</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-primary-background"></button></td>
                                            <td><code>@mzr-color-primary-background</code></td>
                                            <td>Фон сайта, цвет рамки таблиц.</td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-gray-dark-bg"></button></td>
                                            <td><code>@mzr-color-gray-dark</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-gray-dark-hover-bg"></button></td>
                                            <td><code>@mzr-color-gray-dark-hover</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-gray-lite-bg"></button></td>
                                            <td><code>@mzr-color-gray-lite</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-gray-border-bg"></button></td>
                                            <td><code>@mzr-color-gray-border</code></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-text-bg"></button></td>
                                            <td><code>@mzr-color-text</code></td>
                                            <td>Основной цвет текста</td>
                                        </tr>

                                        <tr>
                                            <td><button style={lStyleWidth} className="uk-button mzr-color-text-mute-bg"></button></td>
                                            <td><code>@mzr-color-text-mute</code></td>
                                            <td>Приглушенный цвет текста</td>
                                        </tr>




                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>



                </Spec>

            );

        }
    });
    return ColorSpec;

}));
