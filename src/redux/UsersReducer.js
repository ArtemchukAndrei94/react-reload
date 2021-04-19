const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const FETCH = 'FETCH';


export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollow = (userId) => {
    return {
        type: UN_FOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const changePage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        changePage: page
    }
}

export const totalCount = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export const isFetching = (fetch) => {
    return {
        type: FETCH,
        fetch
    }
}

let initialState = {
    users: [],
    pageSize: 5,
    count: 0,
    currentPage: 1,
    fetch: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }

                    return u;
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
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
                count: action.count
            };
        case FETCH:
            return {
                ...state,
                fetch: action.fetch
            };
        default :
            return state;
    }

}

export default usersReducer;
