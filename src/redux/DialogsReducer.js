
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    return state;
}

export default dialogsReducer;