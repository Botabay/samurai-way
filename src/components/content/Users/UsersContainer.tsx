import { connect } from "react-redux";
import { Users } from "./Users";
import { UsersDataType, followAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";
import { AppRootStateType } from "../../../redux/reduxStore";

const mapStateToProps=(state:AppRootStateType)=>({
    users:state.users
})
const mapDispatchToProps=(dispatch:any)=>({
    toFollow:(id:string)=>dispatch(followAC(id)),
    toUnfollow:(id:string)=>dispatch(unfollowAC(id)),
    toSetUsers:(users:UsersDataType)=>dispatch(setUsersAC(users))
})
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)