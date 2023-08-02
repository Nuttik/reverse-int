module.exports = function reverse(n) {
    let str = String(n);
    if (n < 0) {
        str = String(n).slice(1);
    }
    return +str.split("").reverse().join("");
};
