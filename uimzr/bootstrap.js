require([

    /*core*/
    'uimzr/spec/core/styleGuid/StyleGuidSpec',
    'uimzr/spec/core/block/BlockSpec',
    'uimzr/spec/core/color/ColorSpec',
    'uimzr/spec/core/shadow/ShadowSpec',

    /*menu*/
    'uimzr/spec/menu/menuPage/MenuPageSpec',
    'uimzr/spec/menu/menuMain/MenuMainSpec',
    'uimzr/spec/menu/menuUser/MenuUserSpec',
    'uimzr/spec/menu/menuUserPage/MenuUserPageSpec',

    /*blog*/
    'uimzr/spec/blog/userStats/UserStatsSpec',

    /*news*/
    'uimzr/spec/news/newsList/NewsListSpec',

    /*dev*/
    'SpecMenu'

], function(

    /*core*/
    StyleGuidSpec,
    SBlock,
    ColorSpec,
    ShadowSpec,


    /*menu*/
    MenuPageSpec,
    MenuMainSpec,
    MenuUserSpec,
    MenuUserPageSpec,

    /*blog*/
    UserStatsSpec,

    /*news*/
    NewsListSpec,

    /*dev*/
    SpecMenu

){




    var App = React.createClass({displayName: "App",

        render: function(){

            return (React.createElement("div", null, 

                React.createElement(SpecMenu, null), 

                /*core*/
                React.createElement(StyleGuidSpec, null), 
                React.createElement(ColorSpec, null), 
                React.createElement(SBlock, null), 
                React.createElement(ShadowSpec, null), 

                /*menu*/
                React.createElement(MenuUserPageSpec, null), 
                React.createElement(MenuPageSpec, null), 

                React.createElement(MenuMainSpec, null), 
                React.createElement(MenuUserSpec, null), 

                /*blog*/
                React.createElement(UserStatsSpec, null), 


                /*news*/
                React.createElement(NewsListSpec, null)

            ));
        }
    });

    React.render(React.createElement(App, null), document.getElementById("uimzr"));


    console.log('start uimzr');
});
