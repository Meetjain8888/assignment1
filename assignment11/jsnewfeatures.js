function rolldie(numsides){
    if (numsides === undefined) {
        numsides = 6
    }
    return Math.floor(Math.random() * numsides) + 1
}
const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];
const allpets = [...cats, ...dogs];

const feline = {legs:4, family: 'felidae'};
const canine = {isfurry: true, family: 'caninae'};

const datafromform = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    usernamae: 'tfunke'
}
const newuser = {...datafromform, id:2345, isadmin:false}

function sum() {
   return arguments.reduce((total, el) => total + el)
} 
function sums(...num) {
    return num.reduce((total, el) => total + el)
}
function raceresults(gold, silver, everyoneelse) {
    console.log(`gold medal goes to: ${gold}`)
    console.log(`silver medal goes to: ${silver}`)
    console.log(`and thanks to everyoneelse: ${everyoneelse}`)
}

const scores = [989080, 894056, 908675, 658907, 890768, 908767];
const highscore = scores[0];
const secondhighscore = scores[1];
const [gold, silver, bronze, ...everyoneelse] = scores;


const user = {
    email: 'harvey@gmail.com',
    password: 'xhjfwehfujahfre',
    firstname: 'harvey',
    lastname: 'milk',
    born: 1930,
    died: 1978,
    bio: 'harvey bernard milk was an american politician and the first openly dairy',
    city: 'san francisco',
    state: 'california'
}
const {email, firstname, lastname, bio, city} = user;
const {born: birthyear, died: deathyear} = user;
