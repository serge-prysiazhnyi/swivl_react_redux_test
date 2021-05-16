import React from "react";
import PropTypes from 'prop-types';

import "./pagination.css";

const Pagination = ({ getNextPage, getPrevPage, isFirst }) => {
    return (
        <div className="pagination">
            <button onClick={getPrevPage} className={isFirst ? "disabled" : ""}>prev</button>
            <button onClick={getNextPage}>next</button>
        </div>
    )
}

Pagination.propTypes = {
    getNextPage: PropTypes.func,
    getPrevPage: PropTypes.func,
    isFirst: PropTypes.bool
};

export default Pagination;
