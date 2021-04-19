import {act} from "@testing-library/react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

export const addPostActionCreator = () => {
    return {
        type : ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type : UPDATE_NEW_POST_TEXT,
        text : text

    }
}

export const setProfile = (profile) => {
    return {
        type : SET_PROFILE,
        profile

    }
}

let initialState = {
        posts: [
            {id: "1", msg: "Hello"},
            {id: "2", msg: "How are you"},
            {id: "3", msg: "Hi"},
            {id: "4", msg: "All cool"}
        ],
        tempPost : "",
        profile : null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let post = {id: "5", msg: state.tempPost};

            /*Делаем полную копию state потому что если не меняя state, subcribe в react-redux считает
            что state не изменился и не делает перерисовку чистой компоненты*/

            // stateCopy = {...state} <- копируются только примитивы в новый объект, копируем только те объекты которые собираемся менять
            return {
                ...state,
                posts : [...state.posts, post],
                tempPost : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                tempPost: action.text
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default :
            return state;
    }

}

export default profileReducer;
