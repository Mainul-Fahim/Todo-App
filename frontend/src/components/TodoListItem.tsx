import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { deleteTodo } from '../api/Todos';
import { useMutation, useQueryClient } from 'react-query';
import { ITodo } from '../interface/interface';


interface TodoListItemProps {
  todo: ITodo;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  console.log(todo);

  const mutation = useMutation(() => deleteTodo(todo?.id as string), {
 
    onSuccess: () => {

      queryClient.invalidateQueries('todos');
      navigate('/');
    },
  });

  const handleDelete = async () => {
    
    const confirmDelete = confirm("Are you sure you want to delete this todo?");
    
    if (confirmDelete) {
    
      await mutation.mutateAsync();
    }
  
  };


  return (
    <li className="border p-4 my-2 rounded-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{todo?.title}</h2>
        <p className="text-gray-600">{todo?.description?.substring(0,50) + "..."}</p>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => navigate(`/todos/${todo?.id}`)}
          className="bg-blue-500"
        >
          View
        </Button>
        <Button
          onClick={() => navigate(`/todos/edit/${todo?.id}`)}
          className="bg-yellow-500"
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-red-500"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoListItem;
