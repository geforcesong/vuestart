var co = require('co')
co(function*() {
    var result = yield asyncFun1(1)
    var result1 = yield asyncFun1(2)
    var d = yield [asyncFun1(3), asyncFun1(4)]
    return d
}).then(function(value) {
    console.log(value)
}, function(err) {
    console.error(err.stack)
})

function asyncFun1(v) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve(v * 10)
        }, 500)
    })
}

function c() {
    console.log("hello");
}