const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function createTodo() {
	const li = document.createElement('li')
	li.innerHTML = `
		<input type="checkbox" />
		<button>delete</button>
		<span>text</span>
	`
	return li

}