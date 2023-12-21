import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { fetchTodo } from '../api/Todos';
import { useQuery } from 'react-query';
import { ITodo } from '../interface/interface';

  
  interface TodoDetailsProps {
    todo?: ITodo;
  }

const Todo: React.FC<TodoDetailsProps> = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { data, isLoading, isError } = useQuery<{ data: ITodo }, Error>(['todo', id], () => fetchTodo(id as string));
    console.log(id,data);
   
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error loading todo</div>;
      }

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">{ data?.data?.title}</h2>
                <p className="text-gray-600 mb-4 text-wrap">{ data?.data?.description}</p>
                <div className="flex space-x-4">
                    <Button onClick={() => navigate("/")} className="bg-blue-500">Back to List</Button>
                </div>
            </div>
        </div>
    );
};

export default Todo;