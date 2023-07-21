import { Field, reduxForm } from "redux-form"
import { authAPI } from "../../api/api"
import { maxLength, requiredValueValidator } from "../../utils/validators"
import { Input } from "../../common/FormControlls/FormControlls";

const maxLength10 = maxLength(10);
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'login'}
                    validate={[requiredValueValidator, maxLength10]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'password'}
                    validate={[requiredValueValidator, maxLength10]}
                    component={Input} 
                    />
            </div>
            <div>
                <Field 
                name={'rememberMe'} 
                validate={[requiredValueValidator, maxLength10]}
                component={Input} 
                type={"checkbox"}
                 />remember me
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