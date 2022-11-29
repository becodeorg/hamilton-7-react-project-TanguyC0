import React from "react";
import ReactDOM from "react-dom/client";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
  });
};
const composer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(rootReducer, composer(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);
