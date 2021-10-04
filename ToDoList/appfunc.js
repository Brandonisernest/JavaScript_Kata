//vars
const taskBtn = document.getElementById('task-btn');
const inputBar = document.getElementById('input-bar');
const todoSection = document.getElementById('todo-container');

function taskBtnHandler() {
  const taskDiv = document.createElement('div');
  const taskItem = document.createElement('li');
  const completedBtn = document.createElement('button');

  taskDiv.className = `task-div`;
  taskItem.className = `task-item`;
  completedBtn.className = `complete-btn`;
  taskItem.innerHTML = inputBar.value;
  completedBtn.innerHTML = 'Completed?';
  completedBtn.addEventListener('click', completedBtnHandler);

  taskDiv.append(taskItem, completedBtn);
  todoSection.append(taskDiv);
}

function completedBtnHandler(e) {
  const element = e.currentTarget.parentElement;//this "assigns the current item....Js knows.."
  todoSection.removeChild(element);//from the section, remove the element
  //HAVE HENRY EXPLAIN THIS.....what is remove child???

  //better understand how to traverse the dom
}

//event handlers
taskBtn.addEventListener('click', taskBtnHandler);
