import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return (
        <div style={{ textAlign: "center", width: "100vw" }}>
            <h1>Ooops!</h1>
            <p>We couldn't find what you're looking for.</p>
            <p>
                {err.statusText || err.message}
            </p>
            <a href="/">Back to Home</a>
        </div>
    )
}

export default Error;