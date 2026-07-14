import { useId, useState } from 'react'

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('')
  const inputId = useId()

  const createTodo = (event) => {
    event.preventDefault()
    const content = newTodo.trim()
    if (!content) return
    onCreateTodo({ id: crypto.randomUUID(), content })
    setNewTodo('')
  }

  return (
    <form className="todo-create" onSubmit={createTodo}>
      <label className="todo-label" htmlFor={inputId}>Yeni görev</label>
      <div className="todo-create-row">
        <input id={inputId} value={newTodo} onChange={(event) => setNewTodo(event.target.value)} className="todo-input" type="text" placeholder="Örn. Proje notlarını gözden geçir" autoComplete="off" />
        <button className="todo-button" type="submit" disabled={!newTodo.trim()}>Ekle</button>
      </div>
    </form>
  )
}

export default TodoCreate
