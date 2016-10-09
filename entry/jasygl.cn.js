require('css/main.scss')
//require("bootstrap/less/bootstrap.less");

function regex(str) {
    return new RegExp('^'+str+'$', 'g')
}
var uri = window.location.pathname

// if (regex('/hello').test(uri)) {
//     require(['hello.js'], function(hello) {
//         hello()
//     });
// }else if(regex('/main').test(uri)) {
//     require(['main.js'], function(main) {
//         main();
//     });
// }