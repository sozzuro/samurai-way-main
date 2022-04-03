import state, {addPost, mainStateType, subscriber, updateNewPostText} from "./redux/state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderTree = (state: mainStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree(state)

subscriber(renderTree)