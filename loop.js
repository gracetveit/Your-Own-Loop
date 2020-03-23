const loop = function (value, test, update, body) {
    if (test(value) === false) {
        return undefined
    }
    body(value)
    newValue = update(value)
    loop(newValue, test, update, body)

}

loop(3, n => n > 0, n => n - 1, console.log);
// > 3
// > 2
// > 1