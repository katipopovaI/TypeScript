"use strict";
// If you are absolutely sure that #root element DOES exist in your DOM, you can show TS your confidence with a ! operator.
const root = document.getElementById("root");
class Cat {
    constructor(name) {
        this.name = name;
    }
}
const kitty = new Cat(name, 'Kitty');
root.innerHTML = `My cat is <b>${kitty.name}</b>`;
