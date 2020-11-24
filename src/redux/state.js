import {renderEntireTree} from "../render";

let state =
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

    }

export let addPost = () => {
    let post =  {id: "5", msg: state.profilePage.tempPost};
    state.profilePage.posts.push(post);
    state.profilePage.tempPost = "";
    renderEntireTree(state);
}

export let addTempPost = (tempChar) => {
    debugger;
    state.profilePage.tempPost = state.profilePage.tempPost + tempChar;
    renderEntireTree(state);
}


export default state;