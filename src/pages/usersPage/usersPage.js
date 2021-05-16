import React, { useCallback, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, connect } from "react-redux";
import { fetchUsers } from "../../redux/actions";
import { USERS_PER_PAGE } from "../../constants";

import UsersList from "../../components/usersList";
import Spinner from "../../components/spinner";
import Pagination from "../../components/pagination";

const UsersPage = ({ fetchUsers }) => {
    const users = useSelector((state) => state.users);
    const app = useSelector((state) => state.app);
    const { loading, error } = app;
    const { usersList, since } = users;

    useEffect(() => {
        if(!usersList.length) {
            fetchUsers(since);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isFirst = since === 0;

    const getNextPage = useCallback(() => {
        fetchUsers(since + USERS_PER_PAGE);
    }, [fetchUsers, since])

    const getPrevPage = useCallback(() => {
        fetchUsers(since - USERS_PER_PAGE);
    }, [fetchUsers, since])

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
            <Pagination
                getNextPage={getNextPage}
                getPrevPage={getPrevPage}
                isFirst={isFirst}
            />
        </div>
    )
}

const mapDispatchToProps = {
    fetchUsers
}

UsersPage.propTypes = {
    fetchUser: PropTypes.func
}

export default connect(null, mapDispatchToProps)(UsersPage);
