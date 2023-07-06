import { connect } from "react-redux"
import { Header } from "./Header"
import { setAuthAC } from "../../redux/authReducer"
import React from "react"
import axios from "axios"

class HeaderContain extends React.Component<any> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(res => {
                // debugger;
                if(res.data.resultCode===0){
                    this.props.toSetAuth({...res.data.data,userId:res.data.data.id})
                }
            })
    }
    render=()=> (
        <Header {...this.props} />
    )
}

const mapStateToProps=(state:any)=>({
    auth:state.auth
})
const mapDispatchToProps={
    toSetAuth:setAuthAC
}
export const HeaderContainer=connect(mapStateToProps, mapDispatchToProps)(HeaderContain)