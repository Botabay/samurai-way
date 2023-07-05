// import axios from "axios"
import { UserType, UsersDataType } from "../../../redux/usersReducer"
import { User } from "./User/User"
import React, { useEffect } from "react"
import s from './Users.module.css'

type PropsType = {
    users: UsersDataType
    toFollow: any
    toUnfollow: any
    // toSetUsers: any
    // toSetTotalUsersCount: any
    toSetCurrentPage: any
    getPageUsers:any
}

export const Users = (props:PropsType) => {
    const pagesCount = Math.ceil(props.users.totalUsersCount / props.users.pageSize)
    const arr = []
    for (let i = 1; i < pagesCount; i++) arr.push(i);
    const onClickHandler = (el: number) => {
        props.toSetCurrentPage(el)
        props.getPageUsers(el);
    }
    return (<div>
        <div>
            {arr.map((el: number) => <span
                onClick={() => onClickHandler(el)}
                className={el === props.users.currentPage ? s.selected : ''}
            >
                {el}
            </span>)}
        </div>
        {
            props.users.users.map((el: UserType) => (
                <div key={el.id}>
                    <div className="avatarSection">
                        <p>{el.avatarUrl}</p>
                        <p>{el.follow ?
                            <button onClick={() => props.toUnfollow(el.id)}>unfollow</button> :
                            <button onClick={() => props.toFollow(el.id)}>follow</button>}
                        </p>
                    </div>
                    <div className="infoSection">
                        <span>{el.name}</span>
                    </div>
                </div>
            ))
        }
    </div>)
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