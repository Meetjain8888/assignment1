async function hello() {
}
const sing = async () => {
    throw new error("UH OH!")
    return 'LA LA LA LA'
}
sing()
.then((data) => {
    console.log("PROMISE RESOLVED WITH", data)
})
.catch(err => {
    console.log("OH NO, PROMISE REJECTED")
    console.log(err)
})
const login = (username, password) => {
    if (!username || !password) throw 'MISSING CREDENTIALS'
    if (password === 'meetjain') return 'WELCOME!'
    throw 'INVALID PASSWORD'
}
login('mnviudflh', 'meetjain')
.then(msg => {
    console.log("LOGGED IN!")
    console.log(msg)
})
.catch(err => {
    console.log("ERROR!")
    console.log(err)
})