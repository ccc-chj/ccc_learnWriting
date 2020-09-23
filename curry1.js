function add(a, b) {
    return a + b;
}

function curry(fn) {
    let _args = Array.prototype.slice.call(arguments, 1);
    let _curry = function() {
        let allArgs = _args.concat([...arguments]);
        return fn.apply(this, allArgs);
    }
    return _curry;
}

var add1=curry(add,10)
console.log(add1(10)(20)); //20