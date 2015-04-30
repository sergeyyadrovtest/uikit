require([

    /*core*/
    'uimzr/spec/core/block/BlockSpec',

    /*menu*/
    'uimzr/spec/menu/menuPage/MenuPageSpec',
    'uimzr/spec/menu/menuMain/MenuMainSpec',
    'uimzr/spec/menu/menuUser/MenuUserSpec',

    /*dev*/
    'SpecMenu'

], function(

    SBlock,
    MenuPageSpec,
    MenuMainSpec,
    MenuUserSpec,

    SpecMenu

){




    var App = React.createClass({displayName: "App",

        render: function(){


            return (React.createElement("div", null, 

                React.createElement(SpecMenu, null), 
                React.createElement(SBlock, null), 
                React.createElement(MenuPageSpec, null), 

                React.createElement(MenuMainSpec, null), 
                React.createElement(MenuUserSpec, null)

            ));
        }
    });

    React.render(React.createElement(App, null), document.getElementById("uimzr"));


    console.log('start uimzr');
});
