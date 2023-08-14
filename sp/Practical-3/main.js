// main.js

const todoList = require('./todoList');

// Add tasks
todoList.addTask('Buy groceries');
todoList.addTask('Finish homework');
todoList.addTask('Go to the gym');

// Remove a task
todoList.removeTask('Finish homework');

// List tasks
const tasks = todoList.listTasks();
console.log('Tasks:', tasks);
