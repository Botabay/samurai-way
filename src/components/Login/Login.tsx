import { Field, reduxForm } from "redux-form"
import { maxLength, requiredValueValidator } from "../../utils/validators"
import { Input } from "../../common/FormControlls/FormControlls";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Navigate, useNavigate } from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";

const maxLength20 = maxLength(20);
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'email'}
                    validate={[requiredValueValidator, maxLength20]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'password'}
                    validate={[requiredValueValidator, maxLength20]}
                    component={Input}
                    type={'password'}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    validate={[requiredValueValidator, maxLength20]}
                    component={Input}
                    type={"checkbox"}
                />remember me
            </div>
            <div>{props.error}</div>
            <div>
                <button >send</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const miniLogin = (props: any) => {
    const onSubmit = (dataForm: any) => {
        const { email, password, rememberMe } = dataForm
        props.loginTC({ email, password, rememberMe })
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
})

export const Login = connect(mapStateToProps, { loginTC })(miniLogin)