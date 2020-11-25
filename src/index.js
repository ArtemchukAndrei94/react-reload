import state, {addPost, addTempPost, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addTempPost={addTempPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
renderEntireTree();
subscribe(renderEntireTree);



