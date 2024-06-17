// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtnEl = $('#addTask-btn');

const formModal = $('#formModal');

const taskTitle = $('#taskTitle');

const taskDueDate = $('#datepicker');

const taskDescription = $('#taskDescription');

const TaskCardEl = $('#todo-cards');

const titleInput = taskTitle.val();
const dueDateInput = taskDueDate.val();
const descriptionInput = taskDescription.val();

//next step: pull items from localstorage to create task cards, add task card to the document

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card

//add task card to to-do container, add delete button
//past due: red, due today: future:default


function createTaskCard(task) {
  const taskCard = $('<div></div>');
  taskCard.addClass("card my-3");

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


// TaskCardEl.append(cardTitle, cardDate, cardDescription);
$('#todo-cards').append(taskCard);

};


// Todo: create a function to render the task list and make cards draggable
//function renderTaskList() {
//taskList.textContent = taskList.length; 
//for (let i=0; i <taskList.length; i++) {
//const taskList = taskList[i];


$( function() {
    $( "#draggable" ).draggable()
});

// Todo: create a function to handle adding a new task
function handleAddTask(event){
  event.preventDefault();

  const titleInput = taskTitle.val();
  const dueDateInput = taskDueDate.val();
  const descriptionInput = taskDescription.val();
function TodoCard (title, date, description) {
    this.title= titleInput;
    this.date = dueDateInput;
    this.description = descriptionInput;
};

  if (!titleInput || !dueDateInput || !descriptionInput) {
    console.log('Please enter task information');
    return;
  }
  const task = new TodoCard(titleInput, dueDateInput, descriptionInput)
  createTaskCard(task);
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  const clickedBtn = $(event.target);
  clickedBtn.closest('.card').remove();

  };


// Todo: create a function to handle dropping a task into a new status lane


function handleDrop(event, ui) 
  { ui.draggable.detach().appendTo($(this));

}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(document).on('click', '#delete', handleDeleteTask);
 //renderTaskList()
 formModal.on('submit', handleAddTask);

 $(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

});


  