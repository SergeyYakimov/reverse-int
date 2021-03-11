module.exports = function reverse(n) {
    if (isNaN(n) || !Number.isInteger(n)) {
        throw new Error();
    }

    let num = n;

    if (n < 0) {
        num = Math.abs(n);
    }

    return +[...String(num)].reverse().join("");
};
