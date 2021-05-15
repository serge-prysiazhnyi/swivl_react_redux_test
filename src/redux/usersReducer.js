import { FETCH_USERS, FETCH_USER } from "./types";

const initialState = {
    usersList: [],
    // ???
    currentUser: null
}

export const usersReducer = (state = initialState, actions) => {
    switch(actions.type) {

        case FETCH_USERS:
            return {...state, usersList: actions.payload}

        case FETCH_USER:
            return {...state, currentUser: actions.payload}

        default:
            return state
    }
}
 