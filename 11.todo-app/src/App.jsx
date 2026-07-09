import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) =>{
    setTodos([...todos, newTodo]);
  }
  console.log(todos);

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)]);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos =  todos.map((todo)=>{
      if(todo.id!==newTodo.id){
        return todo;
      }
      return newTodo;
  })
  setTodos([...updatedTodos]);
}

  return (
    <div className='App'>
      <div className='main'>
        <h1 className='title-class'>GÖREVLER</h1>
        <TodoCreate oncreateTodo={createTodo}/> {/*Fonksiyon TodoCreate componente gönderilir */}
        <TodoList todolist = {todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo}/>
      </div>
      
    </div>
  )
}

export default App
