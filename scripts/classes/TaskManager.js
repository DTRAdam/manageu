import Task from "./Task.js";

class TaskManager {

    constructor() {
        this.tasks = []
    }
    addTask(description) {
        this.tasks.push(new Task(description))
    }
    deleteTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (id == this.tasks[i].getId()) {
                this.tasks.splice(i, 1)
            }
        }
    }
    updateTaskdescription(description, id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (id == this.tasks[i].getId()) {
                this.tasks[i].setdescription(description)
            }
        }
    }
    completeTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (id == this.tasks[i].getId()) {
                this.tasks[i].setCompleted()
            }
        }
    }
}

export default TaskManager;

