import React, { useEffect } from "react";
import { useTypesSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { setTodoPage } from "../store/action-creators/todos";

const TodoList: React.FC = () => {
    const { todos, loading, error, page, limit } = useTypesSelector(
        (state) => state.todo
    );
    const { fetchTodo, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodo(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.id} - {todo.title}
                    </div>
                ))}
            </div>
            <div>
                {pages.map((p) => (
                    <span onClick={() => setTodoPage(p)}>{p}</span>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
