import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk"
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
    blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)))
export let persistor = persistStore(store)



