import authReducer from "./authReducer";
import userReducer from "./userReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    jwt: authReducer,
});

export default rootReducer;