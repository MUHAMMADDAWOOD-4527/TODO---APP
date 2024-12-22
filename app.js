const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

// Add event listener for form submission
todoForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const todoText = todoInput.value.trim(); // Get the input value

    if (todoText) {
        addTask(todoText); // Add the new task
        todoInput.value = ""; // Clear the input field
    }
});

// Function to add a new task
function addTask(text) {
    const todoLI = document.createElement('li'); // Create list item
    todoLI.className = 'todo'; // Apply CSS class

    const taskText = document.createElement('span'); // Create task text
    taskText.className = 'todo-text'; // Apply CSS class
    taskText.textContent = text; // Set task text

    const deleteButton = document.createElement('button'); // Create delete button
    deleteButton.className = 'delete-button'; // Apply CSS class
    deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </svg>
    `;
    deleteButton.addEventListener('click', () => {
        todoLI.remove(); // Remove task when delete button is clicked
    });

    // Append task text and delete button to list item
    todoLI.appendChild(taskText);
    todoLI.appendChild(deleteButton);

    // Add the task to the task list
    todoListUL.appendChild(todoLI);
}