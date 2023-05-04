import { 
    SEARCH_BOOK
} from "../_actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case SEARCH_BOOK:
            return { ...state, success: action.payload }
        default:
            return state
    }
}
