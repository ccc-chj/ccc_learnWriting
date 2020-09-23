function add() {
    let args = [...arguments];

    let _adder = function() {
        let _args = Array.prototype.slice.call(arguments);
        if (_args.length == 0) {
            return args.reduce((a, b) => {
                return a+b;
            }, 0);
        } else {
            [].push.call(args, ..._args);
            return _adder;
        }
    }
    return _adder;
}
let ans = add(1)(2)(3)();
console.log(ans);