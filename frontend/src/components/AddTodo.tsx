import React from 'react';
import Form from './Form';
import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from '../api/Todos';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../interface/interface';

const AddTodo: React.FC = () => {
    
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const createPostMutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
            console.log("success!")
            navigate("/")
        }
    });

    const handleAddTodo = (todo:ITodo) => {
        createPostMutation.mutate({
            ...todo
        })
        console.log(todo)
        navigate
    }

    return (
        <div>
            <h2 className="text-3xl text-blue-500 font-bold text-center">Add new Todo</h2>
            <Form type="add" onSubmit={handleAddTodo} />
        </div>
    );
};

export default AddTodo;