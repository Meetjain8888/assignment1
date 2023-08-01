let maximum = parseInt(prompt("enter your maximum number!"));
while(!maximum) {
    maximum = parseInt(prompt("enter the valid number!"));
}

const targetnum= Math.floor(Math.random() * maximum) + 1;
console.log(targetnum);
let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;
while (guess !== targetnum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetnum) {
        guess = parseInt(prompt("too high! enter a new guess!"));
    } else {
        guess = parseInt(prompt("too low! enter a new guess!"))
    }
}
if (guess === 'q') {
    console.log("ok, you quit!")
} else {
    console.log("congrats! you win")
console.log(`you got it! it took you ${attempts} guesses`)
}
