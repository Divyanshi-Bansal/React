import React from 'react'

export const todoListApi = async() =>{
  return fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then((res) => res)
  .catch((e)=>{
    console.log("error {}", e);
    return "Error while loading todo list";
  })

  // console.log(response);
  // return response;

}

export const addTodoItemApi = async(item) =>{
  return fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: item,
      completed: false,
      userId: 5,
    })
  })
  .then(res => res.json())
  .then((res) => res)
  .catch((e)=>{
    console.log("error {}", e);
    return "Error while loading todo list";
  })

  // console.log("response of adding todo: ", response);
  // return response;

}
