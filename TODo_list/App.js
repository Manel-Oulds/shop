//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Listener
todoButton.addEventListener("click", addTodo );
todoList.addEventListener("click", deleteCheck) ;

// Functions

function addTodo(event){
    event.preventDefault(); //stop button
    //New div with todo item Buttton delete and check
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText= todoInput.value;
    todoDiv.appendChild(newTodo);
    //Button check
    const checkbutton = document.createElement("button");
    checkbutton.classList.add("check-btn");
    checkbutton.innerHTML = '<i class= "fas fa-check"> </i>'
    todoDiv.appendChild(checkbutton);
    //Button delete
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    // Add todo ==> todoList
    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(e){
    const c  = e.target;
    // Delete
    if (c.classList[0] === "delete-btn"){
        c.parrentElement.remove();
    }
}