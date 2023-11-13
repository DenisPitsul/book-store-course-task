import React, { FunctionComponent } from "react";
import './NotFoundPage.css'

const NotFoundPage: FunctionComponent = () => {
    return (
        <div className="container">
            <p className="not-found-text">Oops, something went wrong. 404 error</p>
        </div>
    )
}

export default NotFoundPage;