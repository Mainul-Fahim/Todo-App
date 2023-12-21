import { ITodo } from "../interface/interface";

export async function fetchTodos() {
    const response = await fetch('http://localhost:5000/api/todos');
    return response.json()
  }
  
  export async function fetchTodo(id:string) {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`);
    return response.json()
  }
  
  export async function createTodo(newTodo:ITodo) {
    const response = await fetch(`http://localhost:5000/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    });
    return response.json()
  }
  
  export async function updateTodo(updatedTodo:ITodo) {
    const response = await fetch(`http://localhost:5000/api/todos/${updatedTodo?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTodo)
  });
  return response.json()
  }
  
  export async function deleteTodo(id:string) {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    return response.json()
  }