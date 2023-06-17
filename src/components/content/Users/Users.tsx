import { UserType, UsersDataType } from "../../../redux/usersReducer"
import { User } from "./User/User"

type PropsType={
    users: UsersDataType
}
export const Users=({users}:PropsType)=>{
    console.log(users);
    
   return (<div>{
        users.map((el:UserType)=><User/>)
    }
    </div>)
}