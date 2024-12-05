function addInput() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue) {
        let li = document.createElement("li");
        li.innerHTML = `${taskValue} <button class="deleteBtn" onclick="deletTask(this)">`;
        document.getElementById("taskList").appendChild("li");
        taskInput.value="";
    }else{
        alert("Enter a task")
    }


}