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

    /*dev*/
    SpecMenu

){




    var App = React.createClass({

        render: function(){

            return (<div>

                <SpecMenu />

                {/*core*/}
                <StyleGuidSpec/>
                <ColorSpec/>
                <SBlock/>
                <ShadowSpec/>

                {/*menu*/}
                <MenuUserPageSpec/>
                <MenuPageSpec/>

                <MenuMainSpec/>
                <MenuUserSpec/>

                {/*blog*/}
                <UserStatsSpec/>

            </div>);
        }
    });

    React.render(<App/>, document.getElementById("uimzr"));


    console.log('start uimzr');
});
