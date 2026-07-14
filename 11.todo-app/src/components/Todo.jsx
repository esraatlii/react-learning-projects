import { useRef, useState } from 'react'
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa'
import { IoIosRemoveCircle } from 'react-icons/io'

function Todo({ todo, colorIndex, onRemoveTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTodo, setNewTodo] = useState(todo.content)
  const inputRef = useRef(null)

  const startEditing = () => {
    setNewTodo(todo.content)
    setIsEditing(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const cancelEditing = () => {
    setNewTodo(todo.content)
    setIsEditing(false)
  }

  const updateTodo = (event) => {
    event.preventDefault()
    const content = newTodo.trim()
    if (!content) return
    onUpdateTodo({ ...todo, content })
    setIsEditing(false)
  }

  return (
    <li className={`todo-card todo-card--${colorIndex + 1}`}>
      <span className="todo-tape" aria-hidden="true" />
      {isEditing ? (
        <form className="todo-edit-form" onSubmit={updateTodo}>
          <label className="sr-only" htmlFor={`todo-${todo.id}`}>Görevi düzenle</label>
          <input ref={inputRef} id={`todo-${todo.id}`} value={newTodo} onChange={(event) => setNewTodo(event.target.value)} onKeyDown={(event) => event.key === 'Escape' && cancelEditing()} className="todo-input todo-edit-input" type="text" />
          <div className="todo-actions">
            <button className="icon-button icon-button--confirm" type="submit" aria-label="Değişikliği kaydet" disabled={!newTodo.trim()}><FaCheck aria-hidden="true" /></button>
            <button className="icon-button" type="button" onClick={cancelEditing} aria-label="Düzenlemeyi iptal et"><FaTimes aria-hidden="true" /></button>
          </div>
        </form>
      ) : (
        <>
          <p className="todo-item-text">{todo.content}</p>
          <div className="todo-actions">
            <button className="icon-button" type="button" onClick={startEditing} aria-label={`Düzenle: ${todo.content}`}><FaEdit aria-hidden="true" /></button>
            <button className="icon-button icon-button--danger" type="button" onClick={() => onRemoveTodo(todo.id)} aria-label={`Sil: ${todo.content}`}><IoIosRemoveCircle aria-hidden="true" /></button>
          </div>
        </>
      )}
    </li>
  )
}

export default Todo
