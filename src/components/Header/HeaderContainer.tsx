import { connect } from "react-redux"
import { Header } from "./Header"
import { setAuthAC } from "../../redux/authReducer"
import React from "react"
import { authAPI } from "../../api/api"

class HeaderContain extends React.Component<any> {
    componentDidMount(): void {
        authAPI.getAuthData()
            .then(data => {
                this.props.toSetAuth({ ...data.data, userId: data.data.id })
            })
    }
    render = () => (
        <Header {...this.props} />
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.auth
})
const mapDispatchToProps = {
    toSetAuth: setAuthAC
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContain)