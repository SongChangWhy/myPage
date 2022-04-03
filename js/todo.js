
let todoList = [];
const todoBTN = document.getElementById("todoAdd");
const list = document.getElementById("list");
const doMore = document.getElementById("doMore");
function todoAdd(event) {
    event.preventDefault();
    let todo = document.getElementById("newTodo")
    todoList.push(todo.value);
    addList(todo.value);
    todo.value = "";
}

function addList(item) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    var i = document.createElement('input');
    i.setAttribute("type", "checkbox");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(i);
    li.appendChild(button);
    span.innerHTML = item; 
    // li.innerHTML = <input type="checkbox" name="" id=""></input>
    list.appendChild(li);
    saveList();
}

function saveList() {
    localStorage.setItem("list", JSON.stringify(todoList));
}

const savedList = localStorage.getItem("list");


if (savedList !== null){
    const parsedList = JSON.parse(savedList);
    localStorage.removeItem("list");
    parsedList.forEach((item) => addList(item));
    parsedList.forEach((item) => todoList.push(item));
    saveList();
}

doMore.addEventListener("submit", todoAdd);

function deleteTodo(event) {
    const li = event.target.parentElement;
    let item = (li.innerText.slice(0,-1));
    li.remove();
    todoList = todoList.filter((e) => e != item);
    localStorage.setItem("list", JSON.stringify(todoList));
}