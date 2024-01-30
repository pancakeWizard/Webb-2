document.addEventListener("DOMContentLoaded", function(){
    taskList = document.querySelector("ul");
    btnListener = document.querySelector("button");
    btnListener.addEventListener("click", function(){
        newTask = document.querySelector("input").value;
        newTaskElement = document.createElement("li");
        newTaskElement.innerHTML = newTask;
        taskList.appendChild(newTaskElement)
    })
    


})