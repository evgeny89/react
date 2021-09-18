import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import messageReducer from "./messageSlice";
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: 'login',
    storage,
    whitelist: ['user'],
}

const reducers = combineReducers({
    user: userReducer,
    messages: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware]
})