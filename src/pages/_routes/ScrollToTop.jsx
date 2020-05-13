import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ location }) => {
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, [pathname]);

    return null;
};

export default withRouter(ScrollToTop);