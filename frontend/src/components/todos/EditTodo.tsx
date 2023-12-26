import React from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';
import useTodo from '../../hooks/useTodo';


const EditTodo: React.FC = () => {

    const { id } = useParams();

    const {  handleUpdateTodo, todo } = useTodo(id);
    
    return (
        <div>
            <h2 className="text-3xl text-blue-500 font-bold text-center">Edit Todo</h2>
            <Form type="edit" onSubmit={handleUpdateTodo} initialValue={todo?.data} />
        </div>
        
    );
};

export default EditTodo;