import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { fetchUsers } from "../../redux/actions";

import UsersList from "../../components/usersList";
import Spinner from "../../components/spinner";

const UsersPage = ({ fetchUsers }) => {
    const users = useSelector((state) => state.users);
    const app = useSelector((state) => state.app);
    const { loading, error } = app;
    const { usersList } = users;

    useEffect(() => {
        if(!usersList.length) {
            fetchUsers();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
        return (
            <div className="error-massage">Something went wrong</div>
        )
    }

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <div>
            <UsersList usersList={usersList} />
        </div>
    )
}

const mapDispatchToProps = {
    fetchUsers
}

export default connect(null, mapDispatchToProps)(UsersPage);
