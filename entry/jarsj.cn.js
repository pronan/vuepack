require("./css/main.scss")

function regex(str) {
    return new RegExp('^'+str+'$', 'g');
}
var uri = window.location.pathname;

if (regex('/hello').test(uri)) {
    require(['./js/hello.js'], function(hello) {
        hello()
    });
}else if(regex('/main').test(uri)) {
    require(['./js/main.js'], function(main) {
        main();
    });
}