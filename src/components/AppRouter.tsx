import React, { FunctionComponent, useContext } from "react";
import { AppContext } from "../context/Context";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/Routes";

const AppRouter: FunctionComponent = () => {
    const {isAuth, setIsAuth} = useContext(AppContext);

    return (
        isAuth
            ?
            <Routes>
                {
                    privateRoutes.map(route => 
                        <Route
                            key={route.path}
                            element={<route.component/>}
                            path={route.path}
                        />
                    )
                }
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(route => 
                        <Route
                            key={route.path}
                            element={<route.component/>}
                            path={route.path}
                        />
                    )
                }
            </Routes>
    )
}

export default AppRouter;