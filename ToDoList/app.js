//declare global task array to store tasks
// let toDoArr = [];

//input bar
class inputBar {
  constructor() {
    this.toDoArr = [];
  }

  inputBtnHandler(htmlelem) {
    let toDoValue = htmlelem.value;
    this.toDoArr.push(toDoValue);
    console.log(this.toDoArr);
  }

  render() {
    const renderHook = document.getElementById('input-bar');
    const inputEl = document.createElement('input');
    const inputBtnEl = document.createElement('button');
    inputBtnEl.addEventListener(
      'click',
      this.inputBtnHandler.bind(this, inputEl)
    ); //what is this?

    inputBtnEl.innerText = 'Add To Do!';
    renderHook.append(inputEl);
    renderHook.append(inputBtnEl);
    return renderHook;
  }
}

class toDoList {
  constructor() {
      this.instanceOfInput = new input
  }

  render() {
    const renderHook = document.getElementById('todo-container'); //renderHook will be the html "section that I render"
    const toDoEl = document.createElement('ul');
    toDoEl.innerHTML = `item 1:`;
    renderHook.append(toDoEl); //adding the elements to the hook
    //hook is something that allows you adjust without RERENDERING
    return renderHook;
  }
}

//overall class
class App {
  constructor() {}

  render() {
    const inputBarRender = new inputBar();
    const toDoListRender = new toDoList();
    inputBarRender.render();
    toDoListRender.render();
  }
}

const todoApp = new App();
todoApp.render();

//questions:
//1. I couldn't use my inputBtnHandler properly without this.inputBtnHandler.bind(this, ...); <--what is happening here
