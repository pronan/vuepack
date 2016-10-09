var funcs=require("coffee/test")
//var funcs=[function(){return 'abc'}]
for (var i = funcs.length; i--; ) {
    console.log(funcs[i]())
}