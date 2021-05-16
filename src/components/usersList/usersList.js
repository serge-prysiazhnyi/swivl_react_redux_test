import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./usersList.css";

const UsersList = ({ usersList = [] }) => {
    return (
        <ul className="users-list">
            {usersList && (
                usersList.map(({ id, login, html_url, name }) => (
                    <li key={id}>
                        <Link to={`/user/${login}`} className="users-list__router-link">
                            <img className="users-list__avatar-preview" src={`${html_url}.png?size=100`} alt="" />
                            <span className="users-list__name">login: {login}</span>
                        </Link>
                        <a className="users-list__external-link" href={html_url} target="_blank" rel="noreferrer">profile on GitHub</a>
                    </li>
                ))
            )}
        </ul>
    )
}

UsersList.propTypes = {
    usersList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        login: PropTypes.string,
        html_url: PropTypes.string
    }))
}

export default UsersList;
