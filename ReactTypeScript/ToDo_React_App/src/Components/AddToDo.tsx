import React, { FormEvent, useState } from 'react'

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const handleformSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo)
    setTodo('');
  }
  return (
    <form onSubmit={handleformSubmit} >
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type='submit' >Add</button>
    </form>
  )
}

export default AddToDo
