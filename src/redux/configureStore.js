import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userReducer from './modules/user';

const middleware = [logger];

const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
