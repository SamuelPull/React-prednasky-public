const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');
const path = require('path');
path.resolve(__dirname, './src')


const getAllTodos = async () => {
  const data = await fs.readFile(__dirname + '/database.json', 'utf-8');
  console.log(data)
  if (!data) return [];
  return JSON.parse(data); 
}

const deleteAllTodos = async () => {
  await fs.writeFile(__dirname + '/database.json', '', 'utf-8')
}

const createTodo = async (todo) => {
  const newId = uuidv4();
  todo.id = newId;
  
  const data = await fs.readFile(__dirname + '/database.json', 'utf-8');
  let todos;
  if (!data) {
    todos = [todo]
  } else {
  todos = JSON.parse(data)
  if (Array.isArray(todos)) {
    todos.push(todo)
  } else {
    todos = [todo]
  }
  }
  await fs.writeFile(__dirname + '/database.json', JSON.stringify(todos), 'utf-8')
  return newId;
}

const getTodoById = async (id) => {
  const data = await fs.readFile(__dirname + '/database.json', 'utf-8');
  const todos = JSON.parse(data)
  if (Array.isArray(todos)) {
    const [todo] = todos.filter(t => t.id === id)
    return todo;
  } else {
    return undefined;
  }
}

const deleteTodoById = async (id) => {
  const data = await fs.readFile(__dirname + '/database.json', 'utf-8');
  const todos = JSON.parse(data)
  console.log(todos)
  const updatedTodos = todos.filter(t => t.id !== id);
  const updatedData = JSON.stringify(updatedTodos);
  await fs.writeFile(__dirname + '/database.json', updatedData, 'utf-8')
  return id;
}

const updateTodoById = async (id, updatedTodo) => {
  const data = await fs.readFile(__dirname + '/database.json', 'utf-8');
  const todos = JSON.parse(data)
  console.log(todos)
  const foundTodo = todos.filter(t => t.id === id)
  console.log(foundTodo)
  if (foundTodo.length <= 0)
    return;
  const updatedTodos = todos.map((t) => {
    if (t.id !== id) {
      return t;
    } else {
    return {
      ...t,
      ...updatedTodo
    }}
  });
  const updatedData = JSON.stringify(updatedTodos);
  await fs.writeFile(__dirname + '/database.json', updatedData, 'utf-8')
  return id;
}

module.exports = { getAllTodos, createTodo, getTodoById, deleteTodoById, updateTodoById, deleteAllTodos }