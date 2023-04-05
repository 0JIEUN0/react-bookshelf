import { 
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
} from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, success: action.payload }
            break;
        case LOGIN_USER:
            return { ...state, success: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        default:
            return state
    }
}
