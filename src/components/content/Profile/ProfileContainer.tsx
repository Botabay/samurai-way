import React from "react"
import { Profile } from "./Profile"
import { connect } from "react-redux";
import { AppRootStateType } from "../../../redux/reduxStore";
import axios from "axios";
import { toSetUserProfileAC } from "../../../redux/profileReducer";
import { profile } from "console";

// type PropsType = {
//     toSetUserProfile:any
// }
export class ProfileContain extends React.Component<any>{
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.toSetUserProfile(res.data);
            })
    }
    render = () => {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
   profile:state.profile.profile
})
const mapDispatchToProps = {
    toSetUserProfile:toSetUserProfileAC
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContain)