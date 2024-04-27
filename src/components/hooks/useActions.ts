import { bindActionCreators } from "redux";
import { useAppDispatch } from "./useAppDispatch";
import ActionCreators from "../hooks/index";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(ActionCreators, dispatch);
};
