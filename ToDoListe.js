var Task = /** @class */ (function () {
    class Task {
        constructor(description, priority) {
            this.description = description;
            this.priority = priority;
            this.done = false;
        }
        toggleDone() {
            this.done = !this.done;
        }
    }
    return Task;
}());

var ToDo = /** @class */ (function () {
    class ToDo {
        constructor() {
            this.toDoList = [];
        }
        addNewItem(description, priority) {
            this.toDoList.push(new Task(description, priority));
        }
    }
    return ToDo;
}());

