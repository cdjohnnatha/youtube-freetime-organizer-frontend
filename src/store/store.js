import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
store.__PERSISTOR = persistStore(store);


export default store;