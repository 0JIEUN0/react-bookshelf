import { combineReducers } from "redux";
import user from './user_reducer'
import book from './book_reducer'

const rootReducer = combineReducers({
    user,
    book,
});

export default rootReducer;
