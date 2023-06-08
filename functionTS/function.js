function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined,
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a === null || a === void 0 ? void 0 : a.toString(),
        };
    }
    return {
        x: a,
        y: b,
    };
}
console.log("Empty", position());
console.log("one param", position(42));
console.log("two param", position(10, 15));
