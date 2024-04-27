import { bindActionCreators } from "redux";
import { useAppDispatch } from "./useAppDispatch";
import * as UserActionCreators from "../../store/action-creators/users";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
};
