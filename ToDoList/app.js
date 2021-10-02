//event handlers
const taskBtn = document.getElementById('task-btn');
const inputBar = document.getElementById('input-bar');

class toDoList {
  constructor() {
    this.toDoArr = [];
  }

  statusBtnHandler(renderhook, element) {
    renderhook.remove(element);
    // alert('works1');
  }

  taskBtnHandler(renderhook) {
    let toDoEl = document.createElement('li');
    const statusBtn = document.createElement('button');
    statusBtn.className = 'status-btn';
    statusBtn.innerText = 'Completed?';
    toDoEl.innerHTML = inputBar.value;
    this.toDoArr.push(inputBar.value);

    statusBtn.addEventListener(
      'click',
      this.statusBtnHandler.bind(this, renderhook, toDoEl)
    );
    // statusBtn.addEventListener('click', () => {
    //     renderhook.remove(toDoEl);
    //   });
    renderhook.append(toDoEl, statusBtn);
    // console.log(this.toDoArr);
  }

  render() {
    const renderHook = document.getElementById('todo-container'); //renderHook will be the html "section that I render"
    taskBtn.addEventListener(
      'click',
      this.taskBtnHandler.bind(this, renderHook)
    );

    const statusBtn = renderHook.querySelector('.status-btn');
    console.log('this is status butn?',statusBtn);
    // statusBtn.addEventListener(
    //     'click',
    //     this.statusBtnHandler.bind(this, renderhook, toDoEl)
    //   );
    // renderHook.append(test); //adding the elements to the hook
    //hook is something that allows you adjust without RERENDERING
    return renderHook;
  }
}

//overall class
class App {
  constructor() {}

  render() {
    //render input bar on app
    // const inputBarRender = new inputBar();
    //render toDoListin aoo
    const toDoListRender = new toDoList();
    // inputBarRender.render();
    toDoListRender.render();
  }
}

const todoApp = new App();
todoApp.render();

//questions:
//1. I couldn't use my inputBtnHandler properly without this.inputBtnHandler.bind(this, ...); <--what is happening here

//input bar
// class inputBar {
//   constructor() {
//   }

//   inputBtnHandler(htmlelem) {
//     let toDoValue = htmlelem.value;
//     toDoArr.push(toDoValue);
//   }

//   listRenderHandler(renderhook){
//       renderhook.append(toDoArr[0]);

//   }

//   render() {
//     const renderHook = document.getElementById('input-bar');
//     const inputEl = document.createElement('input');
//     const inputBtnEl = document.createElement('button');
//     inputBtnEl.innerText = 'Add To Do!';
//     inputBtnEl.addEventListener(
//       'click',()=>
//       {this.inputBtnHandler.bind(this, inputEl);

//     }
//     ); //what is this?
//     renderHook.append(inputEl);
//     renderHook.append(inputBtnEl);
//     return renderHook;
//   }
// }
