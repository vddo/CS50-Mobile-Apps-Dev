const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// first try
// const firstOrderList = document.querySelector("#todo-list")

// array to represent the todo list items
let todoItems = []


function addItem(todo) {
  const todoListObj = {
    description: todo,
    completed: false,
    index: todoItems.length,
  };
  todoItems.splice(0, 0, todoListObj);
}

function editItem(label) {
  const editItem = document.querySelectorAll('.edit-item');
  label.contentEditable = true;
  label.addEventListener('blur', () => {
    for (let i = 0; i < editItem.length; i += 1) {
      todoItems[i].description = editItem[i].innerText;
    }
    });
}

function displayTodoItems() {
  list.innerHTML = '';
  // go through all elements in ul todolist
  for (let i = 0; i < todoItems.length; i += 1) {
    const todoItem = todoItems[i];
    // create a list element
    const item = document.createElement('li');
    item.classList.add('list-item');
    // create an input element as a subelement of list element "item"
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoItem.completed;
    checkbox.classList.add('checkbox');


    // add elements to the document
    item.appendChild(checkbox);
    list.appendChild(item)
  }

  // // create a list element
  // const item = document.createElement('li');
  // item.classList.add('list-item');
  // // create an input element as a subelement of list element "item"
  // const checkbox = document.createElement('input');
  // checkbox.type = 'text';
  // checkbox.classList.add('checkbox');
  // checkbox.value = "Test1"
  // // checkbox.placeholder = "Add"
  // // const label = document.createElement('label');
  // // label.htmlFor = 'checkbox';
  // // label.innerText = '';
  // // label.classList.add('edit-item');


  // // add elements to the document
  // item.appendChild(checkbox);
  // // item.appendChild(label);
  // list.appendChild(item);
  // // editItem(label);
  // // addTodo(label.innerText)
}


function newTodo() {

  addItem("");
  console.log(todoItems);   
  
  displayTodoItems()
  }


