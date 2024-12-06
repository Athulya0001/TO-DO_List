document.getElementById("addButton").addEventListener("click", function(){
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue!==""){
        let li= document.createElement("li");
        li.textContent=taskValue;

        let deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.classList.add("deleteBtn");
        deleteButton.addEventListener("click", function(){
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);

        taskInput.value="";
    }else{
        alert("Please enter a task")
    }
});

console.log("new")

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskContent);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

    } else {
        alert("Please enter a task.");
    }
});
