import { ITodo, ITodoData } from '../interface/interface';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createTodo, deleteTodo, fetchTodo, fetchTodos, updateTodo } from '../api/Todos';


const useTodo = (id?: string) => {

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: todos, isLoading, isError } = useQuery<ITodoData, Error>('todos', fetchTodos);
  
  const { data: todoDetails, isLoading: isTodoLoading, isError: isTodoError } = useQuery<{ data: ITodo }, Error>(
    id ? ['todo', id] : 'todos', // Use 'todos' as the key when id is not available
    () => (id ? fetchTodo(id) : fetchTodos()), // Fetch todo if id is present, otherwise fetch todos
    {
      enabled: !!id, // Enable the query only if id is truthy
    }
  );

  const createPostMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      console.log("success!")
      navigate("/")
    }
  });

  const updatePostMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      console.log("success!")
      navigate("/")
    }
  });

  const deleteMutation = useMutation(

    () => deleteTodo(id as string), {
    onSuccess: () => {

      queryClient.invalidateQueries('todos');
      navigate('/');
    },
  });

  const handleAddTodo = (todo: ITodo) => {
    createPostMutation.mutate({ ...todo })
    console.log(todo)
    navigate("/")
  }

  const handleUpdateTodo = (updatedTodo: ITodo) => {
    updatePostMutation.mutate({ id, ...updatedTodo })
    console.log(updatedTodo)
  }

  const handleDeleteTodo = async () => {

    const confirmDelete = confirm("Are you sure you want to delete this todo?");

    if (confirmDelete) {

      await deleteMutation.mutateAsync();
    }

  };

  return {

    todos,
    todo: todoDetails,
    isLoading: isLoading || isTodoLoading,
    isError: isError || isTodoError,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo

  };
};

export default useTodo;