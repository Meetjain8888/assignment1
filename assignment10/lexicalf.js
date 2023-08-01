function bankrobbery() {
    const hero = ['spiderman', 'molverine', 'black panther', 'batman']
    function cryforhelp() {
        for(let heroes of hero) {
            console.log(`please help me! ${heroes.toUpperCase()}`)
        }
    }
    cryforhelp();
}
const square = function(x) {
    return x * x;
}
function makemysteryfunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("congrats! i am a good function!")
            console.log("you win a million dollars!")
        }
    } else {
        return function() {
            alert("stop trying to close the windows!")
            alert("you have been infected by a computer virus!")
    }
}
}
const math = {
    sq: function(num) {
        return num * num;
    },
    perimeter: function(x) {
        return x * 10;
    }
};
const cat = {
    name:'blue steele',
    color:'grey',
    breed:'scottish fold',
    meow(){
        console.log(`${this,name} says meowww`);
    }
}
const meow2 = cat.meow;

const hen = {
    name: 'helen',
    eggcount: '0',
    layanegg() {
        this.eggcount++;
        return 'egg';
    }
};
const numbers = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];
numbers.forEach(function (el) {
    if (el % 2 === 0) {
    console.log(el)
    }
})
const moon = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];
const doubles = moon.map(function(num) {
    return num * 2;
})
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames = fullNames.map(function (name) {
    return name.first;
  });
const greet = (person) => {
    return (`hey ${person}!`);
}
function validUserNames(arr) {
    const filteredArr = arr.filter(function (name) {
      return name.length < 10;
    });
    return filteredArr;
  }
  const exams = [80,90,45,90,67,89,99,98]
  exams.every(score => score >= 75)

  function allEvens(arr) {
    return arr.every(function (num) {
      return num % 2 === 0;
    });
  }
  const price = [9.99,8.99,45.99,67.99,78.99];
  const total = price.reduce((total,price) => {
    return total + price
  })
 const minprice =  price.reduce((min,price) => {
    if (price>min){
        return price;
    }
    return min;
  })
  const man = {
    firstname: 'viggo',
    lastname: 'mortensen',
    fullname:function() {
       return `${this.firstname} ${this.lastname}`
    },
    shoutname:function(){
        setTimeout(() => {
            console.log(this.fiullname())
        }, 3000)
    }
  }