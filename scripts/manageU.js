import TaskManager from "./classes/TaskManager.js";
import Task from "./classes/Task.js"

let manager = new TaskManager();


window.addTask = function addTask() {
    let description = document.getElementById("description").value
    if (description) {
        manager.addTask(description)
        showTasks()
    } else alert(`Invalid input: You need to add a description`)


}

function showTasks() {
    document.getElementById("activeTasks").innerHTML = "";
    document.getElementById("completedTasks").innerHTML = "";
    for (let task of manager.tasks) {

        if (task.completed) {
            document.getElementById("completedTasks").innerHTML += `<div><li class='list-group-item d-inline-block me-2 text-bg-dark rounded-3 '> ${task.description}</li><button class='btn btn-success me-1'onclick='completeTask(${task.id})'disabled><i class="fa-solid fa-check"></i></button>
        <button class='btn btn-primary me-1' onclick='updateTaskDescription(${task.id},"${task.description}")' disabled><i class="text-light fa-sharp fa-solid fa-pencil"></i></button>
        <button class='btn btn-danger me-1'onclick='deleteTask(${task.id})'><i class="fa-solid fa-trash"></i></button>
        </div>`;
        } else {
            document.getElementById("activeTasks").innerHTML += `<div><li class='list-group-item d-inline-block me-2 text-bg-dark rounded-3 '> ${task.description}</li><button class='btn btn-success me-1'onclick='completeTask(${task.id})'><i class="fa-solid fa-check"></i></button>
        <button class='btn btn-primary me-1' onclick='updateTaskDescription(${task.id}, "${task.description}")'><i class="text-light fa-sharp fa-solid fa-pencil"></i></button>
        <button class='btn btn-danger me-1'onclick='deleteTask(${task.id})'><i class="fa-solid fa-trash"></i></button>
        </div>`;
        }

    }
    localStorage.setItem("Tasks", JSON.stringify(manager.tasks))

}

let Tasks = JSON.parse(localStorage.getItem("Tasks"));

for (let Task1 of Tasks) {
    let { id, description, completed } = Task1
    let Task2 = new Task(description)
    Task2.id = id
    Task2.completed = completed
    manager.tasks.push(Task2)
}
showTasks()


window.completeTask = function completeTask(id) {
    manager.completeTask(id);
    showTasks()


}





window.deleteTask = function deleteTask(id) {
    manager.deleteTask(id);
    showTasks()

}

window.updateTaskDescription = function updateTaskDescription(id, description) {
    let update = prompt(`What is the new description`, description)
    manager.updateTaskdescription(update, id)
    showTasks()

}



