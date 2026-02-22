const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');
const message = document.querySelector('.message');
const deleteBtn = document.querySelector('.delete-btn');

let selectedTask = null;

function addTask() {
    if (taskInput.value === '') {
        message.textContent = 'Please enter a task';
        return;
    }
    
    message.textContent = '';
    
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    li.addEventListener('click', function() {
        if (selectedTask) {
            selectedTask.classList.remove('selected');
        }
        this.classList.add('selected');
        selectedTask = this;
    });
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask() {
    if (selectedTask) {
        taskList.removeChild(selectedTask);
        selectedTask = null;
        message.textContent = '';
    } else {
        message.textContent = 'Please select a task to delete';
    }
}

addBtn.addEventListener('click', addTask);
deleteBtn.addEventListener('click', deleteTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});