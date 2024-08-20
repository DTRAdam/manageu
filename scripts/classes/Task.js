class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description
        this.completed = false;
    }
    getId() {
        return this.id
    }
    setdescription(description) {
        this.description = description
    }
    setCompleted() {
        this.completed = true;
    }
}

export default Task;
