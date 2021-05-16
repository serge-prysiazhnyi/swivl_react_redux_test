import { FETCH_USERS, FETCH_USER } from "./types";

const initialState = {
    usersList: [],
    currentUserData: {},
    since: 0
}

export const usersReducer = (state = initialState, actions) => {
    switch(actions.type) {

        case FETCH_USERS:
            return {...state, usersList: actions.payload.usersList, since: actions.payload.since}

        case FETCH_USER:
            return {...state, currentUserData: actions.payload}

        default:
            return state
    }
}
 