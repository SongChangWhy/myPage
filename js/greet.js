const text = document.querySelector("input");
const form = document.querySelector("form")
const hello = document.querySelector("h4");

function submit(event) {
    event.preventDefault();
    localStorage.setItem("name", text.value);
    form.classList.add("hidden");
    hello.innerText = `Hello ${text.value}`;
    hello.classList.remove("hidden");
}
form.addEventListener("submit", submit);

const savedName = localStorage.getItem("name");

if (savedName === null) {
    form.classList.remove("hidden");
} else {
    hello.innerText = `Hello ${savedName}`;
    hello.classList.remove("hidden");
}

const logoutBtn = document.querySelector("#logout");

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("list");
    window.location.reload();
}
logoutBtn.addEventListener("click",logout);

