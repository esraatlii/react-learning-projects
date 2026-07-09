import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css';
import axios from 'axios';


function Todo({todo, onRemoveTodo, onUpdateTodo}) {

  const {id, content} = todo;

  const [editTable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () =>{
    onRemoveTodo(id);
  }

  const updateTodo = () =>{
    const request = {
      id:id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditTable(false);
  }
 
  return (
    <div style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between',
      padding:'10px' 
    }}>
            
        <div className="todo-item">
          {
            editTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" /> : todo.content
          }
        </div>
        <div className='todo-item-actions'>
            <IoIosRemoveCircle onClick={removeTodo} className='todo-item-delete'/>
            {
              editTable ? <FaCheck onClick={updateTodo} className='todo-item-check' /> 
              : <FaEdit className='todo-item-edit' onClick={()=>setEditTable(true)}/>
            }
            
            
        </div>
    </div>
  )
}

export default Todo