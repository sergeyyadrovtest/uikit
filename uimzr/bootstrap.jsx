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




    var App = React.createClass({

        render: function(){


            return (<div>

                <SpecMenu />
                <SBlock></SBlock>
                <MenuPageSpec></MenuPageSpec>

                <MenuMainSpec></MenuMainSpec>
                <MenuUserSpec></MenuUserSpec>

            </div>);
        }
    });

    React.render(<App/>, document.getElementById("uimzr"));


    console.log('start uimzr');
});
