import React, { useEffect, useState } from 'react'
import { addTodoItemApi, todoListApi } from '../service/ToDoApiService';
import ToDoListItem from './ToDoListItem';

function ToDoList() {
  const [todoItemsList, setTodoItemsList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [toggle, setToggle] = useState(false);

  const todoListApi_new = async() =>{
    let response = await todoListApi();
    setTodoItemsList(response.todos);
  }

  useEffect(()=>{
    todoListApi_new();
  },[]);

  const handleAddTodoItem = async() =>{
    if(todoItem == ""){
      return;
    }
    let response = await addTodoItemApi(todoItem);
    console.log(response);
    setTodoItem("");
    setTodoItemsList([response, ...todoItemsList]);
  }

  const handleEditTodoItem = (id, value) =>{
    let list = todoItemsList.map((item, index) => {
      if(item.id == id){
        console.log(val, value);
        item.todo = value;
      }
      return item;
    });
    console.log(list);
    setTodoItemsList(list);
  }

  const handleCompleteTodoItem = (id) =>{
    let list = todoItemsList.map((item, index) =>{
      if(item.id == id){
        item.completed = true;
      }
      return item;
    });
    setTodoItemsList(list);
  }
  
  return (
    <div>
      <h1>todo list</h1>
      <div className='todoItemInput'>
        <input name="todoitem" value={todoItem} onChange={(e)=>{
          setTodoItem(e.target.value);
        }} type="text"></input>
        <button onClick={handleAddTodoItem}>Add Item</button>
      </div>

      <button onClick={()=>setToggle(!toggle)}>Edit</button>

      {todoItemsList.length > 0 && 
        <ToDoListItem 
          todoItemsList={todoItemsList} 
          toggle={toggle}
          handleEditTodoItem={handleEditTodoItem} 
          setTodoItem={setTodoItem} 
          todoItem={todoItem}
          handleCompleteTodoItem={handleCompleteTodoItem}
        />
      }

    </div>
  )
}

export default ToDoList
