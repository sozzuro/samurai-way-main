import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {mainStateType} from "./redux/state";

type appPropsType = {
    state: mainStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

function App(props: appPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/profile' component={Profile} />
                    <Route exact path='/dialogs' component={Dialogs} />*/}

                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route exact path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogPage}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
