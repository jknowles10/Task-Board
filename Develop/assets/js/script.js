// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
if (taskList === null) {
taskList = []};

let taskId = JSON.parse(localStorage.getItem("taskId"));
if (taskId === null) {
  taskId = 100};

let nextId = JSON.parse(localStorage.getItem("nextId"));

const addTaskBtnEl = $('#addTask-btn');

const formModal = $('#formModal');

const taskTitle = $('#taskTitle');

const taskDueDate = $('#datepicker');

const taskDescription = $('#taskDescription');

const todoCard = $('#todo-cards');
const inProgressCard = $('#in-progress-cards');
const doneCard = $('#done-cards');

const todoList = $('#to-do');
const inProgressList = $('#in-progress');
const doneList = $('#done');


const titleInput = taskTitle.val();
const dueDateInput = taskDueDate.val();
const descriptionInput = taskDescription.val();

//next step: pull items from localstorage to create task cards, add task card to the document

// Todo: create a function to generate a unique task id


function generateTaskId() {
taskId++;
localStorage.setItem("taskId", JSON.stringify(taskId));
return taskId;
};

// Todo: create a function to create a task card

//add task card to to-do container, add delete button
//past due: red, due today: future:default


function createTaskCard(task) {
  const taskCard = $('<div></div>');
  taskCard.addClass("card my-3");
  taskCard.attr("id", task.id);

  const cardBody = $('<div></div>');
  cardBody.addClass("card-body");
  taskCard.append(cardBody);

  const cardTitle = $('<h1></h1>').text(task.title);
      cardTitle.addClass("card-title");
      cardBody.append(cardTitle);

      
  const cardDate = $('<h3></h3>').text('Due date:'+task.date);
      cardDate.addClass("card-subtitle");
      cardBody.append(cardDate);

  const cardDescription = $('<p></p>').text(task.description);
        cardDescription.addClass("card-text");
        cardBody.append(cardDescription);

  const deleteBtn =$('<button> Delete </button>');
      deleteBtn.addClass("card-body");
      deleteBtn.attr('id', 'delete');
      cardBody.append(deleteBtn);

      //   if (task.status ==='todo-cards') {
      //   taskCard.attr("class","card bg-light");
      //  

    if (task.date < dayjs().format('MM/DD/YYYY')) {
        taskCard.addClass("card bg-danger");
        }  

    else if (task.date === dayjs().format('MM/DD/YYYY')){
        taskCard.addClass("card bg-warning");
        }
      
    // else if (task.status ==='in-progress-cards') {
    //     taskCard.attr("class","card bg-light");
    //     inProgressCard.append(taskCard);  

    else if (task.date < dayjs().format('MM/DD/YYYY')) {
        taskCard.addClass("card bg-danger");
        }  
      //   else if (task.date === dayjs().format('MM/DD/YYYY')){
      //     taskCard.addClass("card bg-warning");
      // }  inProgressCard.append(taskCard); //}

        // else if (task.status ==='done-cards') {
        // taskCard.attr("class","card bg-light");
        // doneCard.append(taskCard);
        todoCard.append(taskCard);
};

//   if (task.date < dayjs().format('MM/DD/YYYY')) {
//     taskCard.addClass("card bg-danger");
//   }  
//   else if (task.date === dayjs().format('MM/DD/YYYY')){
//     taskCard.addClass("card bg-warning");
// }




//};

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() { 
  if (taskList != null) {

  for (let i= 0; i <taskList.length; i++) {
    console.log(taskList[i]);
  createTaskCard(taskList[i]); }}};


// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault();

  const titleInput = taskTitle.val();
  const dueDateInput = taskDueDate.val();
  const descriptionInput = taskDescription.val();
function TodoCard (title, date, description, status, id) {
    this.title= titleInput;
    this.date = dueDateInput;
    this.description = descriptionInput;
    this.status = 'todo-cards';
    this.id = generateTaskId();
};

  if (!titleInput || !dueDateInput || !descriptionInput) {
    console.log('Please enter task information');
    return;
  }
  const task = new TodoCard(titleInput, dueDateInput, descriptionInput, 'todo-cards', generateTaskId());
  taskList.push(task);
  
  localStorage.setItem("tasks", JSON.stringify(taskList));
  createTaskCard(task);
  taskTitle.val('');
  taskDueDate.val('');
  taskDescription.val('');
  
};
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  const clickedBtn = $(event.target);
  clickedBtn.closest('.card').remove();
  };
// Todo: create a function to handle dropping a task into a new status lane


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(document).on('click', '#delete', handleDeleteTask);
 renderTaskList();
 formModal.on('submit', handleAddTask);

 $(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

});

$('.sortable').sortable({
  connectWith:".sortable",

});
$(todoList, inProgressList, doneList).droppable({
  accept:".sortable",
 // drop: handleDrop
});