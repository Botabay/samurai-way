import React from "react";
import { Navigate } from "react-router-dom";


export const RedirectHoc = (Component: any) => {

    class RedirectComponent extends React.Component<any> {
        render() {
            return this.props.isAuth ?
                <Component {...this.props} /> :
                <Navigate to='/login' />
        }

    }
    return RedirectComponent
}

