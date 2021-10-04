//event handlers
const taskBtn = document.getElementById('task-btn');
const inputBar = document.getElementById('input-bar');

class taskList {
  constructor() {
    this.taskArr = [];
  }

  completedBtnHandler(renderhook, e) {
    const element = e.currentTarget.parentElement;
    renderhook.removeChild(element);
  }

  taskBtnHandler(renderhook) {
    //I need to pass in renderhook
    const taskDiv = document.createElement('div');
    const taskEl = document.createElement('li');
    const completedBtn = document.createElement('button');
    taskDiv.className = 'task-div';
    taskEl.className = 'task-list'
    completedBtn.className = 'completed-btn';
    completedBtn.innerText = 'Completed?';
    taskEl.innerHTML = inputBar.value;
    this.taskArr.push(inputBar.value);

    completedBtn.addEventListener(
      'click',
      this.completedBtnHandler.bind(this, renderhook)
    );
      
    taskDiv.append(taskEl, completedBtn);
    renderhook.append(taskDiv);
  }

  render() {
    const renderHook = document.getElementById('todo-container'); //renderHook will be the html "section that I render"
    taskBtn.addEventListener(
      'click',
      this.taskBtnHandler.bind(this, renderHook)
    );
    // renderHook.append(test); //adding the elements to the hook
    //hook is something that allows you adjust without RERENDERING
    return renderHook;
  }
}

//overall class
class App {
  constructor() {}

  render() {
    const taskListRender = new taskList();
    taskListRender.render();
  }
}

const taskApp = new App();
taskApp.render();

//questions:
//1. I couldn't use my inputBtnHandler properly without this.inputBtnHandler.bind(this, ...); <--what is happening here


//Overall Flow
//1. App instanciates 
//2. render() for App, which instantiates a taskList class AND calls taskList's render() method
//3. taskList(TL for short)'s render method creates a renderHook variable (getting HTML element)
//4. In TL's render(), add event listener to global variable "taskBtn"
//5. In taskBtn's eventListner, I pass a taskBtnHandler
//6. I pass TL's renderHook into taskBtnHandler
//7. In taskBtnHandler, I create HTML elements (div, li, btn) and append it to the renderHook I passed in
//8. Within the taskBtnHandler, I add event listeners to the dynamically created completedBtn
//9. In completedBtn's eventlistener, I pass in completedBtnHandler
//10. In completedBtnHandler, I pass in the renderHook I passed into taskBtnHandler, which was passed from TL's render()
//11. In completedBtnHandler, I traverse the DOM
//11a. I assign an identified to current buttnon
//11.b Created a logic that removes the "parentelement" of the current button IF i click on that current button 