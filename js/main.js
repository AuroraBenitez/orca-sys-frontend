/**
 * Created with JetBrains WebStorm.
 * User: Home
 * Date: 2/11/18
 * Time: 14:34
 * To change this template use File | Settings | File Templates.
 */

$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom':'togle',
        opacity:'toggle'
    },"slow");

});
