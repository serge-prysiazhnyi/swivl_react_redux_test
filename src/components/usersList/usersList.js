import React from "react";
import { Link } from "react-router-dom";

import "./usersList.css";

const UsersList = ({ usersList = [] }) => {
    return (
        <ul className="users-list">
            {usersList && (
                usersList.map(({ id, login, html_url, avatar_url }) => (
                    <li key={id}>
                        <Link to={`/user/${id}`}>
                            <img className="users-list__avatar-preview" src={`${html_url}.png?size=100`} alt="" />
                            <span className="users-list__name">login: {login}</span>
                            <a className="users-list__link" href={html_url}>link</a>
                        </Link>
                    </li>
                ))
            )}
        </ul>
    )
}

export default UsersList;
