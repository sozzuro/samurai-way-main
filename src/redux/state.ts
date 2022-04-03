import {v1} from "uuid";

let renderTree = (state: mainStateType) => {
    console.log('State Rendered')
}

export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string,
}
export type postType = {
    id: string,
    message: string,
    likesCount: number
}
export type dialogPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type profilePageType = {
    posts: Array<postType>
    newPostText: string
}
export type mainStateType = {
    dialogPage: dialogPageType
    profilePage: profilePageType
}

let state: mainStateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'It\'s my first message!', likesCount: 3},
            {id: '2', message: 'Hello! How are you?', likesCount: 32}
        ],
        newPostText: ''
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I\'m fine!'},
        ]
    }
}

export const addPost = () => {
    const newPost: postType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}

export const subscriber = (observer: (state: mainStateType) => void) => {
    renderTree = observer;
}

export default state;