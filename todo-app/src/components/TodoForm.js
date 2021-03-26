import React, { useState } from 'react'

import './TodoForm.css'

export const TodoForm = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault(); // prevent full page refresh  
      props.onAdd({name, description})
      setName('')
      setDescription('')
  }

  return (
    <form onSubmit={onFormSubmit} >
        <input type="text" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <textarea value={description} 
        onChange={(e) => setDescription(e.target.value)}></textarea>
        <button>Add TODO</button>
    </form>
  )
}