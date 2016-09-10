var co = require('co')
co(function*() {
    var result = yield asyncFun(1)
    var result1 = yield asyncFun(2)
    var d = yield [asyncFun(3), asyncFun(4)]
    return d
}).then(function(value) {
    console.log(value)
}, function(err) {
    console.error(err.stack)
})

function asyncFun(v) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve(v * 10)
        }, 500)
    })
}

function c() {
    console.log("hello");
}