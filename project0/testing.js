let todoItems = []

function addItem(todo) {
  const todoListObj = {
    description: todo,
    completed: false,
    index: todoItems.length,
  };
  todoItems.splice(0, 0, todoListObj);
}

addItem("");

console.log(todoItems);