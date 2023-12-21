import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo.interface';

const dataFolderPath = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataFolderPath, 'todos.json');

const createTodoIntoDB = async (todoData: Todo) => {

    try {

        const newTodo: Todo = {
            id: uuidv4(),
            title: todoData.title,
            description: todoData.description,
        };
        const todosData = await fs.readFile(dataFilePath, 'utf-8');
        const todos = JSON.parse(todosData);
        todos.push(newTodo);
        await fs.writeFile('data/todos.json', JSON.stringify(todos, null, 2));

        return newTodo;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

const allUsersFromDB = async () => {

    try {
        const todosData = await fs.readFile(dataFilePath, 'utf-8');
        const todos = JSON.parse(todosData)
        return todos;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

const singleTodoFromDB = async (todoId: string) => {

    try {
        const todosData = await fs.readFile(dataFilePath, 'utf-8');
        const todos = JSON.parse(todosData);

        const todo = todos.find((todo: Todo) => todo.id === todoId);
        return todo;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

const UpdateTodoFromDB = async (todoId: string, todoData: Todo) => {

    try {
        const todosData = await fs.readFile(dataFilePath, 'utf-8');
        const todos = JSON.parse(todosData);

        const todoIndex = todos.findIndex((todo: Todo) => todo.id === todoId);
        if (todoIndex === -1) {
            return false
        }

        const updatedTodo: Todo = {
            id: uuidv4(),
            title: todoData?.title,
            description: todoData?.description,
        };

        todos[todoIndex] = updatedTodo;

        await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
        return todos;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

const deleteTodoFromDB = async (todoId: string) => {

    try {
        const todosData = await fs.readFile(dataFilePath, 'utf-8');
        const todos = JSON.parse(todosData);

        const todoIndex = todos.findIndex((todo:Todo) => todo.id === todoId);

        if (todoIndex === -1) {
            return false
        }

        todos.splice(todoIndex, 1);

        await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));

        return true;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}



export const todoServices = {
    createTodoIntoDB,
    singleTodoFromDB,
    UpdateTodoFromDB,
    deleteTodoFromDB,
    allUsersFromDB
}