class Task {
    done: boolean = false;
    constructor(public description: string, public priority: string) {}
  
    toggleDone() {
      this.done = !this.done;
    }
  }
  
  class Output {
    toDoListe: Task[] = [];
    constructor() {}
  
    addNewItem(description: string, priority: string) {
      this.toDoListe.push(new Task(description, priority));
    }
} 