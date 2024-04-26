import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
});

// в файле UserList state.users - не сущевствует, потому что useSelector с типами не дружит
// нужно сделать собственный хук -> c помощью tsc-ого ReturnType получим тип нашего редюсера
export type RootState = ReturnType<typeof rootReducer>;
