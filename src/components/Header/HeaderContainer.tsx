import { connect } from "react-redux"
import { Header } from "./Header"
import { logoutTC} from "../../redux/authReducer"
import React from "react"

class HeaderContain extends React.Component<any> {
    render = () => (
        <Header {...this.props} />
    )
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})
const mapDispatchToProps = {
    logoutTC
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContain)