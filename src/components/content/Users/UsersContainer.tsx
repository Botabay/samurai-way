import { connect } from "react-redux";
import { Users } from "./Users";
import { UserType, followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";
import { AppRootStateType } from "../../../redux/reduxStore";

const mapStateToProps=(state:AppRootStateType)=>({
    users:state.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount
})
const mapDispatchToProps=(dispatch:any)=>({
    toFollow:(id:string)=>dispatch(followAC(id)),
    toUnfollow:(id:string)=>dispatch(unfollowAC(id)),
    toSetUsers:(users:UserType[])=>dispatch(setUsersAC(users)),
    toSetTotalUsersCount:(n:number)=>dispatch(setTotalUsersCountAC(n)),
    toSetCurrentPage:(n:number)=>dispatch(setCurrentPageAC(n)),
})
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)