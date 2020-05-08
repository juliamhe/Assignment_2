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

  function showList() {
    $("#output").text("");
    myList.toDoList.forEach(function(item){
      $("#output").append(`<li class="clickable">${item.description}, ${item.priority}, Done = ${item.done}</li>`);
      $(".clickable").last().click(function(){
        item.toggleDone();
        showList(myList);
      })
    })
  }
  
  let myList = new ToDo();

  $(document).ready(function(){
    $("#toDo-form").submit(function(event){
      event.preventDefault();
      let description = $("#description").val();
      let priority = $("#priority").val();
  
      myList.addNewItem(description, priority);
      showList(myList);
    })
    })