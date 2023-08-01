const password = prompt("enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password!")
} else {
    console.log("invalid password")
}
