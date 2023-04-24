const taskInput = document.querySelector('.input__add');
const buttonAdd = document.querySelector('.button__add');
const buttonDelete = document.querySelectorAll('.button__delete');
const taskListCompleted = document.querySelector('.list__completed');
const taskListCurrent = document.querySelector('.list__current');

const createNewTaskElement = taskString =>  {
  const listItem = document.createElement('li');
  listItem.className = 'task__item';
  listItem.innerHTML = `
    <input class="task__checkbox" type="checkbox">
    <label class="task__label">${taskString}</label>
    <input class="task__input input__edit" type="text">
    <button class="task__button button__edit">Edit</button>
    <button class="task__button button__delete"><img class="delete__img" src="remove.svg"></button>
  `
  return listItem;
}


const addTask = () => {  
  if (!taskInput.value) return;

  const listItem = createNewTaskElement(taskInput.value); 
  taskListCurrent.appendChild(listItem);

  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = '';
}


const editTask = function() {  
  const item = this.parentNode;
  const input = item.querySelector('.task__input');
  const label = item.querySelector('.task__label');
  const button = item.querySelector('.button__edit');  

  if(item.classList.contains('edit-mode')){      
      label.innerText = input.value;
      button.innerText = 'Edit';
  } else {
      input.value = label.innerText;
      button.innerText = 'Save';
  }

  item.classList.toggle('edit-mode');
};


const deleteTask = function() { 
  const listItem = this.parentNode;
  const ul = listItem.parentNode;  
  ul.removeChild(listItem);
}


const taskCompleted = function() {  
  const listItem = this.parentNode;    
  taskListCompleted.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}


const taskIncomplete = function() {  
  const listItem = this.parentNode;  
  taskListCurrent.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

buttonAdd.onclick = addTask;
buttonAdd.addEventListener('click', addTask);


const bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  const checkBox = taskListItem.querySelector('.task__checkbox');
  const editButton = taskListItem.querySelector('.button__edit');
  const deleteButton = taskListItem.querySelector('.button__delete');

  editButton.onclick = editTask;  
  deleteButton.onclick = deleteTask; 
  checkBox.onchange = checkBoxEventHandler;
}

for (let i = 0; i < taskListCurrent.children.length; i++){ 
  bindTaskEvents(taskListCurrent.children[i], taskCompleted);
}

for (let i = 0; i < taskListCompleted.children.length; i++){ 
  bindTaskEvents(taskListCompleted.children[i], taskIncomplete);
}