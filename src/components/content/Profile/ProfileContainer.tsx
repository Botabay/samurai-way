import React from "react"
import { Profile } from "./Profile"
import { connect } from "react-redux";
import { AppRootStateType } from "../../../redux/reduxStore";
import { getProfileDataTC } from "../../../redux/profileReducer";

import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { RedirectHoc } from "../../../HOCs/RedirectHoc";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
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

// type PropsType = {
//     toSetUserProfile:any
// }
export class ProfileContain extends React.Component<any>{
    componentDidMount(): void {
        const id = !this.props.router.params.userId ? 2 : this.props.router.params.userId;
        this.props.getProfileDataTC(id)
    }
    render = () => {
        return (
            <Profile {...this.props} />
        )
    }
}

const WithRedirect=RedirectHoc(ProfileContain)

const ProfileContainWithRoute = withRouter(WithRedirect);

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profile.profile,
    isAuth:state.auth.isAuth
})
const mapDispatchToProps = {
    getProfileDataTC
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainWithRoute)