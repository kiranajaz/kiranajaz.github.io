document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.querySelector('.todo-input');
    const addButton = document.querySelector('.add-button');
    const todosContainer = document.querySelector('.todos');
    const deleteCompletedButton = document.querySelector('.filter[data-filter="completed"]');
    const deleteAllButton = document.querySelector('.delete-all');
  
    addButton.addEventListener('click', addTodo);
    todosContainer.addEventListener('click', handleTodoClick);
    deleteCompletedButton.addEventListener('click', deleteCompletedTasks);
    deleteAllButton.addEventListener('click', deleteAllTasks);
  
    function addTodo() {
      const taskText = todoInput.value.trim();
  
      if (taskText !== '') {
        const todoItem = createTodoItem(taskText);
        todosContainer.appendChild(todoItem);
        todoInput.value = '';
  
        updateEmptyImageVisibility();
      }
    }
  
    function createTodoItem(taskText) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo');
  
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const span = document.createElement('span');
      span.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  
      label.appendChild(checkbox);
      label.appendChild(span);
      todoItem.appendChild(label);
      todoItem.appendChild(deleteButton);
  
      return todoItem;
    }
  
    function handleTodoClick(event) {
      const target = event.target;
  
      if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        toggleTaskCompletion(target);
      } else if (target.classList.contains('todo') || target.tagName === 'SPAN') {
        const checkbox = target.closest('.todo').querySelector('input[type="checkbox"]');
        toggleTaskCompletion(checkbox);
      } else if (target.classList.contains('delete-btn')) {
        deleteTask(target.closest('.todo'));
      }
    }
  
    function toggleTaskCompletion(checkbox) {
      const span = checkbox.nextElementSibling;
      checkbox.checked ? span.classList.add('completed') : span.classList.remove('completed');
    }
  
    function deleteTask(todoItem) {
      todoItem.remove();
      updateEmptyImageVisibility();
    }
  
    function deleteCompletedTasks() {
      const completedTodos = document.querySelectorAll('.todo input:checked');
      completedTodos.forEach((todo) => deleteTask(todo.closest('.todo')));
    }
  
    function deleteAllTasks() {
      const allTodos = document.querySelectorAll('.todo');
      allTodos.forEach((todo) => deleteTask(todo));
    }
  
    function updateEmptyImageVisibility() {
      const emptyImage = document.querySelector('.empty-image');
      const todos = document.querySelectorAll('.todo');
  
      if (todos.length === 0) {
        emptyImage.style.display = 'block';
      } else {
        emptyImage.style.display = 'none';
      }
    }
  
    // Call the function once when the DOM is loaded to set the initial state
    updateEmptyImageVisibility();
  });
  