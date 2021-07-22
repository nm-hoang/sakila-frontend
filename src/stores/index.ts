import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import houseForRentReducers from "./reducers/houseForRent.Reducers";
const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const rootReducer = combineReducers({
	houseforrent: houseForRentReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	return createStore(persistedReducer, composeEnhancers(middlewareEnhancer));
};

const store = configureStore();
const persistedStore = persistStore(store);

store.subscribe(() => {
	// keep track of the previous and current state to compare changes
	// if the token changes set the value in localStorage and axios headers
});

export { store, persistedStore };
