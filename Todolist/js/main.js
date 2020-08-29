
var taskList = [];
var completedTaskList = []

function eventListeners() {
  document.getElementById("addItem").addEventListener("click", Foo);
  document.getElementById("two").addEventListener("click", sortAToZ);
  document.getElementById('three').addEventListener("click", sortZToA);
}
eventListeners();

function element(id){
  return document.getElementById(id);
}
function renderTaskList(taskList){
  let content = ''
  taskList.map((task , index) => {
    content += `
      <li>${task} <a onClick="removeTask(${index})" class="remove-task">X</a> <a onClick="compeletedTask(${index})" class="checked-list">✓</a></li>
    `
  }) // Map end
  element('todo').innerHTML = content;
}
function sortAToZ(){
  let sortTaskList = [...taskList]
  sortTaskList.sort()
  renderTaskList(sortTaskList);
}
function sortZToA(){
  let sortTaskList = [...taskList]
  sortTaskList.sort().reverse()
  renderTaskList(sortTaskList);
}

function Foo(){
  const task = element("newTask").value;
  taskList = [...taskList , task]
  renderTaskList(taskList);
}  


function compeletedTask(index){

  completedTaskList.push(taskList[index])
  taskList.splice(index , 1)
  let contentTodo = ''
  if(taskList.length == 0){
    element('todo').innerHTML = contentTodo;
  }else{
    taskList.map((task , index) => {
      contentTodo += `
        <li>${task} <a onClick="removeTask(${index})" class="remove-task">X</a> <a onClick="compeletedTask(${index})" class="checked-list">✓</a></li>
      `
    }) // Map end
    element('todo').innerHTML = contentTodo;
  }
  
  let content = ''
  completedTaskList.map((task , index) => {
    content += `
      <li>${task} <a style="color:green; float:right">✓</a></li>
    `
  }) // Map end
  element('completed').innerHTML = content;

  
}
function removeTask(index){
  
  taskList.splice(index , 1)
  renderTaskList(taskList)
  element('todo').innerHTML = content;
}