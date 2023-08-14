// todoList.js

const tasks = [];

function addTask(task) {
  tasks.push(task);
}

function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function listTasks() {
  return tasks.slice(); // Return a copy of the tasks array
}

module.exports = {
  addTask,
  removeTask,
  listTasks
};
