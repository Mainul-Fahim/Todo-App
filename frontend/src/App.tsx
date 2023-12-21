import { Route, Routes } from "react-router-dom"
import TodoList from "./pages/TodoList"
import Todo from "./pages/Todo"
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"
import Header from "./components/layout/Header"


function App() {


  return (
    <>
      <Header>Todo App</Header>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="todos/:id" element={<Todo />} />
        <Route path="todos/edit/:id" element={<EditTodo />} />
        <Route path="todos/create-todo" element={<AddTodo />} />
      </Routes>

    </>
  )
}

export default App
