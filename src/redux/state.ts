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
    newPostText: string
}
export type mainStateType = {
    dialogPage: dialogPageType
    profilePage: profilePageType
}

export type StoreType = {
    _state: mainStateType
    getState: () => mainStateType
    _callSubscriber: (state: mainStateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscriber: (observer: (state: mainStateType) => void) => void
}

const store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: mainStateType) {
        console.log('State Rendered')
    },
    addPost() {
        const newPost: postType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscriber(observer: (state: mainStateType) => void) {
        this._callSubscriber = observer;
    },
}

export default store;