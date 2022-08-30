import React from "react";
import { Navigate } from "react-router-dom";
import cookie from "cookie";

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    // With a special NPM Package called "cookie"

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie);
        return cookies["loggedIn"] ? true : false;
    };

    return checkAuth() ? <Component {...rest} /> : <Navigate to="/login" />;
};      

export default ProtectedRoute;
