import {v1} from "uuid";

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
}
export type mainStateType = {
    dialogPage: dialogPageType
    profilePage: profilePageType
}

let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'It\'s my first message!', likesCount: 3},
            {id: '2', message: 'Hello! How are you?', likesCount: 32}
        ]
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

export const addPost = (postText: string) => {
    const newPost: postType = {
        id: v1(),
        message: postText,
        likesCount: 3
    }

    state.profilePage.posts.push(newPost)
}

export default state;