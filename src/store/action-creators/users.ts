import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";
// чтобы использовать функцию fetchUsers как Action, то есть прокидывать её в dispatch мы должны из этой функции вернуть новую функцию, которая параметром принимает dispatch
export const fetchUsers = () => {
    // dispatch нужно типизировать c Dispatch из Redux и указываем как тип <UserAction>
    return async function (dispatch: Dispatch<UserAction>) {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "Ошибка при загрузке",
            });
        }
    };
};
