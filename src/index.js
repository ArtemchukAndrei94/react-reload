import store from "./redux/ReduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



