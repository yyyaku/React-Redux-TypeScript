import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialTodo: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
};

export const todoReducer = (
    state = initialTodo,
    action: TodoAction
): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return { ...state, loading: true };
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return { ...state, loading: false, todos: action.payload };
        case TodoActionTypes.FETCH_TODO_ERROR:
            return { ...state, loading: false, error: action.payload };
        case TodoActionTypes.SET_TODO:
            return { ...state, page: action.payload };
        default:
            return state;
    }
};
