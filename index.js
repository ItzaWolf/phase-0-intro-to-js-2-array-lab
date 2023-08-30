let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Furballer) {
    cats.push(Furballer);
}

function destructivelyPrependCat(Puss) {
    cats.unshift(Puss);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Kitty) {
    return [...cats, Kitty]
}

function prependCat(Meow) {
    return [Meow, ...cats]
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}