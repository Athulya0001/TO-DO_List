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