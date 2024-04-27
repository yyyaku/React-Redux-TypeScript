import * as UserActionCreators from "../../store/action-creators/users";
import * as TodoActionCreators from "../../store/action-creators/todos";

export default {
    ...UserActionCreators,
    ...TodoActionCreators,
};
