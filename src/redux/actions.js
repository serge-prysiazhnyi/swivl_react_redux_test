import axios from "axios";

import {
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    HIDE_ERROR,
    FETCH_USERS,
    FETCH_USER,
} from "./types";

import { basePath, USERS_PER_PAGE } from "../constants";

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

export const fetchUsers = (since) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())

            const res = await axios.get(`${basePath}/users`, {
                params: {
                    per_page: USERS_PER_PAGE,
                    since,
                    username: process.env.REACT_APP_GITHUB_TOKEN || ""
                }
            })

            dispatch({
                type: FETCH_USERS,
                payload: {
                    usersList: res.data,
                    since
                }
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

export const fetchUser = (userLogin) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())

            const res = await await axios.get(`${basePath}/users/${userLogin}`, {
                params: {
                    username: process.env.REACT_APP_GITHUB_TOKEN || ""
                }
            })

            dispatch({
                type: FETCH_USER,
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