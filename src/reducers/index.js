import { combineReducers } from "redux";
import users from './users'

const appReducers = combineReducers({
    users,
});

export default appReducers;