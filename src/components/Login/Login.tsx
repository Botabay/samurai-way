import { Field, reduxForm } from "redux-form"
import { authAPI } from "../../api/api"

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'login'} component="input" />
            </div>
            <div>
                <Field name={'password'} placeholder={'password'} component="input" />
            </div>
            <div>
                <Field name={'rememberMe'} component='input' type={"checkbox"} />remember me
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export const Login = () => {
    const onSubmit = (dataForm: any) => {
        authAPI.toLogin(dataForm)
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}