import React, { useState } from 'react'

function ToDoListItem(props) {

    const [editTodo, setEditTodo] = useState(-1);
    const [editValue, setEditValue] = useState("");

    const todoComplete = {
        color : "green"
    }

    const todoPending = {
        color : "red"
    }

  return (
    <>
    {
        props.todoItemsList.length > 0 && props.todoItemsList.map((item)=>{
            return (
                <div>
                {!props.toggle || editTodo != item.id ?
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <h3 style={item.completed ? todoComplete : todoPending} key={item.id} onClick={()=>setEditTodo(item.id)} id={item.id}>
                            {item.todo}
                        </h3> 
                        {!item.completed &&
                            <button onClick={()=>props.handleCompleteTodoItem(item.id)} id={item.id}>Mark as Complete</button>
                        }
                    </div>
                : 
                    <div>
                        <input value={editValue || item.todo} key={item.id} id={item.id} onChange={(e) => setEditValue(e.target.value)}/>
                        <button onClick={()=> {
                            setEditTodo(false);
                            props.handleEditTodoItem(item.id, editValue);
                            setEditValue("");
                        }}>Save</button>
                    </div>
                }
                </div>
            )
        })
    }
    </>
  )
}

export default ToDoListItem
