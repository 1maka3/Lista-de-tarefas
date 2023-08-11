const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value;
    const dueDate = document.getElementById('due-date').value;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <p>Priority: ${priority}</p>
        <p>Due Date: ${dueDate}</p>
    `;

    taskList.appendChild(taskItem);

    taskForm.reset();
});
