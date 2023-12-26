import React from 'react';
import Form from './Form';
import useTodo from '../../hooks/useTodo';

const AddTodo: React.FC = () => {
    

    const {  handleAddTodo } = useTodo();


    return (
        <div>
            <h2 className="text-3xl text-blue-500 font-bold text-center">Add new Todo</h2>
            <Form type="add" onSubmit={handleAddTodo} />
        </div>
    );
};

export default AddTodo;