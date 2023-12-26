import Button from "../components/common/Button";
import TodoListItem from "../components/todos/TodoListItem";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../interface/interface";
import useTodo from "../hooks/useTodo";

const TodoList: React.FC = () => {

    const navigate = useNavigate();
 
    const { todos,isLoading} = useTodo();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mx-auto max-w-md">
          
            <ul>
                {todos?.data?.map((todo: ITodo) => (
                    <div key={todo?.id}>
                        <TodoListItem todo={todo} />
                    </div>
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