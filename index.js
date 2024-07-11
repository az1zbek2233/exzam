let counter = 0;
let correct = 0;

let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let input = document.querySelector("input");
let p = document.querySelector("p");

let savollar = ["2+2=?", "5+6=?", "7-5=?", "5*2=?", "8+5=?"];
let javoblar = ["4", "11", "2", "10", ""];


h1.textContent = savollar[counter];

button.addEventListener("click", function (event) {
    event.preventDefault();

    let ansver = input.value;

    if (ansver === javoblar[counter]) {
        correct = correct + 1;
    }

    counter = counter + 1;

    if (counter  === savollar.length) {
        p.textContent = `${correct}`;
    }

    h1.textContent = savollar[counter];
});

