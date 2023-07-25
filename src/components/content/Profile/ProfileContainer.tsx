import React from "react"
import { Profile } from "./Profile"
import { connect } from "react-redux";
import { AppRootStateType } from "../../../redux/reduxStore";
import { getProfileDataTC, getProfileStatusTC, updateProfileStatusTC } from "../../../redux/profileReducer";

import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withRedirectHoc } from "../../../HOCs/withRedirectHoc";
import { compose } from "redux";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export class ProfileContain extends React.Component<any>{
    componentDidMount(): void {
        let id = this.props.router.params.userId;
        if (!id) {
            id = this.props.authUserId
        }
        if (!id) {
            this.props.router.navigate('/login')
        }
        this.props.getProfileDataTC(id);
        this.props.getProfileStatusTC(id);
    }
    render = () => {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authUserId: state.auth.userId
})
const mapDispatchToProps = {
    getProfileDataTC,
    getProfileStatusTC,
    updateProfileStatusTC,
}

export const ProfileContainer = compose(
    // withRedirectHoc,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContain)