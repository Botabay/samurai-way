import axios from "axios"
import { UserType, UsersDataType } from "../../../redux/usersReducer"
import { User } from "./User/User"
import React, { useEffect } from "react"

type PropsType = {
    users: UsersDataType
    toFollow: any
    toUnfollow: any
    toSetUsers: any
}

export class Users extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                console.log(res.data);
                this.props.toSetUsers(res.data.items)
            })
    }
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res => {
    //                 console.log(res.data);
    //                 this.props.toSetUsers(res.data.items)
    //             })
    //     }
    // }
    render() {
        return (<div>
            {/* <button onClick={this.getUsers}>get users</button> */}
            {
                this.props.users.map((el: UserType) => (
                    <div key={el.id}>
                        <div className="avatarSection">
                            <p>{el.avatarUrl}</p>
                            <p>{el.follow ?
                                <button onClick={() => this.props.toUnfollow(el.id)}>unfollow</button> :
                                <button onClick={() => this.props.toFollow(el.id)}>follow</button>}
                            </p>
                        </div>
                        <div className="infoSection">
                            <span>{el.name}</span>
                            {/* <span>{el.fullName}</span>
                                <span>{el.status}</span>
                                <span>{el.location.city}</span>
                                <span>{el.location.country}</span> */}
                        </div>
                    </div>
                ))
            }
        </div>)
    }
}

// type PropsType = {
//     users: UsersDataType
//     toFollow: any
//     toUnfollow: any
//     toSetUsers: any
// }

// export const Users = ({ users, toFollow, toUnfollow, toSetUsers }: PropsType) => {
//     // useEffect(() => {
//         // if (users.length===0) {
//         // axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         //     .then(res => {
//         //         console.log(res.data);
//         //         toSetUsers(res.data.items)
//         //     })
//         // }
//     // }, [])
//     const getUsers=()=>{
//         if (users.length===0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(res => {
//                 console.log(res.data);
//                 toSetUsers(res.data.items)
//             })
//         }
//     }
//     return (<div>
//         <button onClick={getUsers}>get users</button>
//         {
//             users.map((el: UserType) => (
//                 <div key={el.id}>
//                     <div className="avatarSection">
//                         <p>{el.avatarUrl}</p>
//                         <p>{el.follow ?
//                             <button onClick={() => toUnfollow(el.id)}>unfollow</button> :
//                             <button onClick={() => toFollow(el.id)}>follow</button>}
//                         </p>
//                     </div>
//                     <div className="infoSection">
//                         <span>{el.name}</span>
//                         {/* <span>{el.fullName}</span>
//                     <span>{el.status}</span>
//                     <span>{el.location.city}</span>
//                     <span>{el.location.country}</span> */}
//                     </div>
//                 </div>
//             ))
//         }
//     </div>)
// }