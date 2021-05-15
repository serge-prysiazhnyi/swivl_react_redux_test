import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { fetchUsers } from "../../redux/actions"

import "./usersList.css";

const UsersList = ({ fetchUsers }) => {
    const users = useSelector((state) => state.users);
    const app = useSelector((state) => state.app);
    const { loading, error } = app;
    const { usersList } = users;

    useEffect(() => {
        // fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    if (error) {
        return (
            <div>Something went wrong</div>
        )
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <ul className="users-list">
            {usersList && (
                usersList.map(({ id, login, html_url, avatar_url }) => (
                    <li key={id}>
                        <img className="users-list__avatar-preview" src={`${html_url}.png?size=100`} alt="" />
                        <span className="users-list__name">login: {login}</span>
                        <a className="users-list__link" href={html_url}>link</a>
                    </li>
                ))
            )}
        </ul>
    )
}

const mapDispatchToProps = {
    fetchUsers
}

export default connect(null, mapDispatchToProps)(UsersList);
