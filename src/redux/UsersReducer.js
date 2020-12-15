import {act} from "@testing-library/react";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


export const followAC = (userId) => {
    return {
        type : FOLLOW,
        userId : userId
    }
}

export const unFollowAC = (userId) => {
    return {
        type : UN_FOLLOW,
        userId : userId
    }
}

export const setUsersAC = (users) => {
    return {
        type : SET_USERS,
        users : users
    }
}

export const changePageAC = (changePage) => {
    return {
        type : SET_CURRENT_PAGE,
        changePage : changePage
    }
}

export const totalCountAC = (totalCount) => {
    return {
        type : SET_TOTAL_COUNT,
        totalCount : totalCount
    }
}

let initialState = {
        users: [],
        pageSize : 5,
        totalCount : 0,
        currentPage : 1
}

const usersReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case FOLLOW:
            return {
              ...state,
              users: state.users.map(u => {
                  if (u.id === action.userId) {
                      return {...u, followed : true};
                  }

                  return u;
              })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed : false};
                    }

                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.changePage
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        default :
            return state;
    }

}

export default usersReducer;
