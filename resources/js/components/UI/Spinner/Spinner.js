import React from "react";

import "./Spinner.css";

const Spinner = ({ fontSize }) => {
    return (
        <div className="loader" style={{ fontSize }}>
            Loading...
        </div>
    );
};

Spinner.defaultProps = {
    fontSize: 10
};
export default Spinner;
