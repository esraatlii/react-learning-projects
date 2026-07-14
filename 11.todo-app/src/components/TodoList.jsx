import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state" role="status">
        <span className="empty-state-icon" aria-hidden="true">✓</span>
        <h2>Liste şimdilik boş</h2>
        <p>İlk görevini ekleyerek güne küçük bir başlangıç yap.</p>
      </div>
    )
  }

  return (
    <section className="todo-list-section" aria-labelledby="todo-list-title">
      <div className="todo-list-header">
        <h2 id="todo-list-title">Notların</h2>
        <span className="todo-count">{todos.length} görev</span>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} colorIndex={index % 4} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
