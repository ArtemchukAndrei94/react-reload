import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./authReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: dialogsReducer,
    usersPage : usersReducer,
    auth : AuthReducer
});

let store = createStore(reducers);

export default store;