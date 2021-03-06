import React from "react";
import PropTypes from 'prop-types';

const User = ({ userData = {} }) => {
    const {
        avatar_url,
        name,
        followers,
        following,
        created_at,
        company,
        email,
        location,
        blog,
        bio
    } = userData;

    return (
        <div className="user-info__avatar">
            {avatar_url && (
                <img src={avatar_url} alt="user avatar" />
            )}
            {name && (
                <p className="user-info__record user-info__name">Name: {name}</p>
            )}
            {!!followers && (
                <p className="user-info__record user-info__followers">Followers: {followers}</p>
            )}
            {!!following && (
                <p className="user-info__record user-info__following">Following: {following}</p>
            )}
            {created_at && (
                <p className="user-info__record user-info__created_at">Created at: {created_at}</p>
            )}
            {company && (
                <p className="user-info__record user-info__company">Company: {company}</p>
            )}
            {email && (
                <p className="user-info__record user-info__email">Email: {email}</p>
            )}
            {location && (
                <p className="user-info__record user-info__location">Location: {location}</p>
            )}
            {blog && (
                <p className="user-info__record user-info__blog">Blog: {blog}</p>
            )}
            {bio && (
                <p className="user-info__record user-info__bio">Bio: {bio}</p>
            )}
        </div>
    )
}

User.propTypes = {
    userData: PropTypes.shape({
        avatar_url: PropTypes.string,
        name: PropTypes.string,
        followers: PropTypes.number,
        following: PropTypes.number,
        created_at: PropTypes.string,
        company: PropTypes.string,
        email: PropTypes.string,
        location: PropTypes.string,
        blog: PropTypes.string,
        bio: PropTypes.string
    })
}

export default User;
