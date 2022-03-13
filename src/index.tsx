import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type dialogsType = {
    id: number,
    name: string
}

export type messagesType = {
    id: number,
    message: string,
}

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

const dialogs: Array<dialogsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
];

const messages: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I\'m fine!'},
];

const posts: Array<postType> = [
    {id: 1, message: 'It\'s my first message!', likesCount: 3},
    {id: 2, message: 'Hello! How are you?', likesCount: 32}
]


ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
    document.getElementById('root')
);