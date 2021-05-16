import React from "react";
import { Link } from "react-router-dom";

import "./goBackBtn.css";

const GoBackBtn = () => {
    return (
        <Link className="go-back-btn" to="/">Home</Link>
    )
}

export default GoBackBtn;
