document.addEventListener("DOMContentLoaded", () => {
  // selecting the form element using its ID
  const createTaskForm = document.getElementById('create-task-form'); 

  // submit event listener to the form
  createTaskForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // gather data into a FormData object
    const formData = new FormData(createTaskForm);

    // 'new-task-description' to select the correct target
    // save it to a variable 
    const taskDescription = formData.get('new-task-description');
    
    // Check if the input is not empty before processing
    if (taskDescription && taskDescription.trim() !== '') {
      console.log('New task submitted:', taskDescription);

      // buildToDo() and call it, passing in the task
      buildToDo(taskDescription.trim());

      // clear the input field after submission
      event.target.reset(); 
    }
  });

  // buildToDo function
  function buildToDo(task) {
    const taskList = document.getElementById('tasks');
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = task;
    taskList.appendChild(newTaskItem);
    console.log(`Task "${task}" added to the list.`);
  }
});
