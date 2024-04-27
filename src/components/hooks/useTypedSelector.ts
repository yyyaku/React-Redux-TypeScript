import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

// useTypesSelector - это useSelector, который работает с типами. useTypesSelector равен useSelector, с исключением, что ещё указываем тип
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;
