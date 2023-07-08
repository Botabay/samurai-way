import React from "react";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../redux/reduxStore";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export const withRedirectHoc = (Component: any) => {

    class RedirectComponent extends React.Component<any> {
        render() {
            return this.props.isAuth ?
                <Component {...this.props} /> :
                <Navigate to='/login' />
        }

    }

    const ConnectedRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent
}

