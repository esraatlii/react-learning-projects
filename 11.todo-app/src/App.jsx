import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => setTodos((items) => [...items, newTodo])
  const removeTodo = (todoId) => setTodos((items) => items.filter(({ id }) => id !== todoId))
  const updateTodo = (updatedTodo) => setTodos((items) =>
    items.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
  )

  return (
    <main className="app-shell">
      <section className="todo-app" aria-labelledby="page-title">
        <header className="app-header">
          <p className="app-kicker">Günlük planın</p>
          <h1 id="page-title" className="app-title">Görevler</h1>
          <p className="app-subtitle">Aklındakileri not et, sırayla tamamla.</p>
        </header>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </section>
    </main>
  )
}

export default App
