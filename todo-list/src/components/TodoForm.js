import React, {useState} from 'react';
import './TodoForm.css';

const TodoForm = (props) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('');


  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh
    props.onAdd({name, description})
    setName('')
    setDescription('')
  }

  return (
    <div className="todo-form">
      <h4>Add TODO</h4>
      <form onSubmit={onFormSubmit}>
        <input className="form-input" type="text" name="newtodo" value={name} onChange={(e) => setName(e.target.value)} placeholder="Co budes robit?"/>
        <textarea className="form-text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="...pridaj par detailov"></textarea>
        <button className="button button-add">Add TODO</button>      
      </form>
    </div>
  )
}

export { TodoForm }