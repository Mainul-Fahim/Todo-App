import { useQuery } from "react-query";
import Button from "../components/Button";
import { fetchTodos } from "../api/Todos";
import TodoListItem from "../components/TodoListItem";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../interface/interface";

const TodoList: React.FC = () => {

    const navigate = useNavigate();
    const { data, isLoading, error } = useQuery('todos', fetchTodos);
    console.log(data, error)

    if (isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <div className="mx-auto max-w-md">
          
            <ul>
                {data?.data.map((todo: ITodo) => (
                    <>
                        <TodoListItem todo={todo} />
                    </>
                ))}
            </ul>
            <Button
                onClick={() => navigate(`/todos/create-todo`)}
                className="bg-blue-500 w-full mx-auto"
            >
               + Add Todo
            </Button>
            
        </div>
    );
};

export default TodoList;