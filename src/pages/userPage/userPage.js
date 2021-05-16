import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { fetchUser } from "../../redux/actions";

import User from "../../components/user";
import Spinner from "../../components/spinner";

const UserPage = ({ fetchUser }) => {
    let { userId } = useParams();
    const users = useSelector((state) => state.users);
    const app = useSelector((state) => state.app);
    const { loading, error } = app;
    const { currentUserData } = users;

    useEffect(() => {
        fetchUser(userId);
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
        <User userData={currentUserData} />
    );
}

const mapDispatchToProps = {
    fetchUser
}

export default connect(null, mapDispatchToProps)(UserPage);
