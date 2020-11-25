function multiply(a, b) {
    return a * b
}

let result1 = multiply(5, 6);
console.log(result1)

let result2 = multiply.apply(null, [5, 6])

console.log(`With apply ${result2}`)




function noParam() {
    console.log(arguments[0])
}

noParam(1, 4, 5)

function noParam2(func) {
    return function() {
        console.log(arguments)
    }
}

var add = function (a, b) {
    return a + b
}

let res = noParam2(add)
res(1, 4)

res(5, 6, 8)