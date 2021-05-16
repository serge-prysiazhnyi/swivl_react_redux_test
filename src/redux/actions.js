import axios from "axios";

import {
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    HIDE_ERROR,
    FETCH_USERS,
    FETCH_USER,
} from "./types";

const basePath = "https://api.github.com";
const USERS_PER_PAGE = 100;

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})

export const showError = (payload) => ({
    type: SHOW_ERROR,
    payload
})

export const hideError = () => ({
    type: HIDE_ERROR
})

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())

            console.log("fetchUsers");

            const res = await axios.get(`${basePath}/users`, {
                params: {
                    per_page: USERS_PER_PAGE,
                    username: process.env.REACT_APP_GITHUB_TOKEN
                }
            })

            dispatch({
                type: FETCH_USERS,
                payload: res.data
            })

            dispatch(hideLoader())
        }
        catch (error) {
            console.log("catch", error);
            dispatch(hideLoader())
            dispatch(showError(error))
        }
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())

            const res = await await axios.get(`${basePath}/users/${id}`, {
                params: {}
            })

            console.log("fetchUser res")

            dispatch({
                type: FETCH_USER,
                payload: res.data
            })

            dispatch(hideLoader())
        }
        catch (error) {
            dispatch(hideLoader())
            dispatch(showError(error))
        }
    }
}