import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './modules/user';
import cartReducer from './modules/cart';
import directoryReducer from './modules/directory';

const middleware = [logger];

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer
    })
);

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

const persistor = persistStore(store);

export {
    store,
    persistor
};
