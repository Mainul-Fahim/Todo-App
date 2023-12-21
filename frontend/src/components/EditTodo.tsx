import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTodo, updateTodo } from '../api/Todos';
import Form from './Form';
import { ITodo } from '../interface/interface';


const EditTodo: React.FC = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { id } = useParams();
    const { data: todo, isLoading, isError } = useQuery<{ data: ITodo }, Error>(['todo', id], () => fetchTodo(id as string));
    console.log(todo,id);
    
    const updatePostMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
            console.log("success!")
            navigate("/")
        }
    });

    if (isLoading) return "loading...";
    if (isError) return `Error: occured`;

    const handleSubmit = (updatedTodo: ITodo) => {
        updatePostMutation.mutate({id, ...updatedTodo})
        console.log(updatedTodo)
    }


    return (
        <div>
            <h2 className="text-3xl text-blue-500 font-bold text-center">Edit Todo</h2>
            <Form type="edit" onSubmit={handleSubmit} initialValue={todo?.data} />
        </div>
        
    );
};

export default EditTodo;