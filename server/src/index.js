const express = require('express')
const PORT = process.env.PORT || 3001;
// const knex = require('./knex/knex');
const cors = require('cors')
const {getAllTodos, createTodo, getTodoById, deleteTodoById, updateTodoById, deleteAllTodos} = require('./handler-filesystem')

const app = express()

app.use(express.json())
app.use(cors())

// main
app.get('', async (req, res) => {
  res.send('Henlo fren')
})

// get all todos
app.get('/todos', async (req, res) => {
  const dbResp = await getAllTodos();  
  res.status(200).send(dbResp)
})

// add todo
app.post('/todos', async (req,res) =>{
  
   const newTodo = req.body;
   try {
     const id = await createTodo(newTodo);
     res.status(201).send(id)
   } catch (err) {
    console.log(err)
     res.status(404).send('something went wrong')
   }
})

//get todo
app.get('/todos/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(404).send('you must provide valid ID')
  }

  try {
    const todo = await getTodoById(req.params.id);
    if (!todo) {
      res.status(404).send('TODO not found')
    } else {
      res.status(200).send(id)
    }
  } catch (err) {
    console.log(err)
    res.status(404).send('something went wrong')
  }
}) 

// update todo
app.put('/todos/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(404).send('you must provide valid ID')
  }

  const updatedTodo = req.body;

  try {
    const updated = await updateTodoById(req.params.id, updatedTodo);
    console.log(updated)
    if (!updated) {
      res.status(404).send('TODO not found')
    } else {
      res.status(202).send(updated)
    }
  } catch (err) {
    console.log(err)
    res.status(404).send('something went wrong')
  }
}) 

// delete all todo
app.delete('/todos/delete/all', async (req, res) => {  

  try {
    const deleted = await deleteAllTodos();
    res.status(200).send('All todos deleted')
  } catch (err) {
    console.log(err)
    res.status(404).send('something went wrong')
  }
}) 

// delete todo
app.delete('/todos/:id', async (req, res) => {  
  if (!req.params.id) {
    res.status(404).send('you must provide valid ID')
  }

  try {
    const deleted = await deleteTodoById(req.params.id);
    res.status(201).send('OK')
  } catch (err) {
    console.log(err)
    res.status(404).send('something went wrong')
  }
}) 



app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})