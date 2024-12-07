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

        const dltButton = document.createElement("button");
        dltButton.textContent = "Delete";

        dltButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskContent);
        listItem.appendChild(dltButton);
        taskList.appendChild(listItem);

        

    } 
    // else {
    //     alert("Please enter a task.");
    // }
});
