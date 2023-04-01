import { 
    REGISTER_USER,
    LOGIN_USER,
} from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, success: action.payload }
            break;
        case LOGIN_USER:
            return { ...state, success: action.payload }
        default:
            return state
    }
}
