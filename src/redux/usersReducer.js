import { FETCH_USERS, FETCH_USER } from "./types";

const initialState = {
    usersList: [],
    currentUserData: {}
}

export const usersReducer = (state = initialState, actions) => {
    switch(actions.type) {

        case FETCH_USERS:
            return {...state, usersList: actions.payload}

        case FETCH_USER:
            return {...state, currentUserData: actions.payload}

        default:
            return state
    }
}
 