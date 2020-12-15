import profileReducer from "./ProfileReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state :
        {
            profilePage: {
                posts: [
                    {id: "1", msg: "Hello"},
                    {id: "2", msg: "How are you"},
                    {id: "3", msg: "Hi"},
                    {id: "4", msg: "All cool"}
                ],
                tempPost : ""
            },

            messagesPage: {
                dialogs: [
                    {id: "1", name: "Andrey"},
                    {id: "2", name: "Sveta"},
                    {id: "3", name: "Anna"}
                ],

                messages: [
                    {id: "1", msg: "Hello"},
                    {id: "2", msg: "Yo man"},
                    {id: "3", msg: "NIGGA"}
                ]
            }

        },

    getState() {
        return this._state;
    },
    _callSubscriber() {

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber();

        },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;

