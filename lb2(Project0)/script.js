const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const todoItem = createTodoItem();
  list.appendChild(todoItem);
  updateItemCount();
  updateUncheckedCount();
}

function createTodoItem() {
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = createCheckbox();
  const text = createTodoText();
  const deleteButton = createDeleteButton();

  todoItem.appendChild(checkbox);
  todoItem.appendChild(text);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

function createCheckbox() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);
  return checkbox;
}

function createTodoText() {
  const text = document.createElement('span');
  text.className = classNames.TODO_TEXT;
  text.textContent = 'New TODO';
  return text;
}

function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTodo);
  return deleteButton;
}

function deleteTodo() {
  const todoItem = this.closest(`.${classNames.TODO_ITEM}`);
  list.removeChild(todoItem);
  updateItemCount();
  updateUncheckedCount();
}

function updateItemCount() {
  itemCountSpan.textContent = list.children.length;
}

function updateUncheckedCount() {
  const uncheckedCount = Array.from(list.children).filter(todo => {
    const checkbox = todo.querySelector(`.${classNames.TODO_CHECKBOX}`);
    return !checkbox.checked;
  }).length;

  uncheckedCountSpan.textContent = uncheckedCount;
}
