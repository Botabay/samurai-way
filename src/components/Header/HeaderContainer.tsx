import { connect } from "react-redux"
import { Header } from "./Header"
import { getAuthDataTC ,logoutTC} from "../../redux/authReducer"
import React from "react"

class HeaderContain extends React.Component<any> {
    // componentDidMount(): void {
    //     this.props.getAuthDataTC()
    // }
    render = () => (
        <Header {...this.props} />
    )
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})
const mapDispatchToProps = {
    // getAuthDataTC,
    logoutTC
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContain)