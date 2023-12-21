import { Request, Response } from "express";
import { todoServices } from "./todo.service";
import { todoValidationSchema } from "./todo.validation";


const createTodo = async (req: Request, res: Response) => {
    console.log(req.body);
    
    try {
        const todoData = req.body;

        const {error,value} = todoValidationSchema.validate(todoData,{ abortEarly: false });

        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                error: error.details,
            });
        }
        
        const result = await todoServices.createTodoIntoDB(value)
        

        res.status(200).json({
            success: true,
            message: 'Todo is created successfully!',
            data: result
        })
    } catch (error) {
        console.log(error);
        
    }
}

const getAllTodos = async (req: Request, res: Response) => {
    
    try {
        
        const result = await todoServices.allUsersFromDB();

        res.status(200).json({
            success: true,
            message: 'Todos fetched successfully!',
            data: result
        })
    } catch (error) {
        console.log(error);
        
    }
}

const getTodoById = async (req: Request, res: Response) => {
    
    const todoId = req.params.id;
    console.log(todoId);
    
    try {
        
        const result = await todoServices.singleTodoFromDB(todoId);

        if (result) {
           
            res.status(200).json({
                success: true,
                message: 'Todo fetched successfully!',
                data: result,
            });
        } else {
            
            res.status(404).json({
                success: false,
                message: 'Todo not found',
                error: {
                    code: 404,
                    description: 'Todo not found!',
                },
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}

const updateTodoById = async (req: Request, res: Response) => {
    
    const todoId = req.params.id;
    const todoData = req.body;
    console.log(todoData);

    try {

        const {error,value} = todoValidationSchema.validate(todoData,{ abortEarly: false });

        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                error: error.details,
            });
        }
        
        const result = await todoServices.UpdateTodoFromDB(todoId,value);


        if (result) {
         
            res.status(200).json({
                success: true,
                message: 'Todo updated successfully!',
                data: result,
            });
        } else {
          
            res.status(404).json({
                success: false,
                message: 'Todo not found',
                error: {
                    code: 404,
                    description: 'Todo not found!',
                },
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}

const deleteTodoById = async (req: Request, res: Response) => {
    
    const todoId = req.params.id;
    console.log(todoId);
    
    try {
        
        const result = await todoServices.deleteTodoFromDB(todoId);

        
        if (result) {
            
            res.status(200).json({
                success: true,
                message: 'Todo deleted successfully!',
                data: null,
            });
        } else {
           
            res.status(404).json({
                success: false,
                message: 'Todo not found',
                error: {
                    code: 404,
                    description: 'Todo not found!',
                },
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}



export const todoControllers = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
}