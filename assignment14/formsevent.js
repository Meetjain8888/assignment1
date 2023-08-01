const form = document.querySelector("#shelterform");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const catName = input.value;
    const newli = document.createElement("li");
    newli.innerText = catName;
    console.log(newli);
    list.append(newli);
    input.value = "";
});