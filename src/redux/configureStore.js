import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userReducer from './modules/user';
import cartReducer from './modules/cart';

const middleware = [logger];

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;
