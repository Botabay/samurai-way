import { Field, reduxForm } from "redux-form"

const LoginForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'login'} component="input" />
            </div>
            <div>
                <Field name={'password'} placeholder={'password'} component="input" />
            </div>
            <div>
                <Field name={'rememberMe'}component='input' type={"checkbox"} />remember me
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export const Login = () => {
    const onSubmit=(dataForm:any)=>{
        console.log(dataForm);
        
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

// export const Login=()=>{
//     return (
//         <div>
//             <h1>login</h1>
//             <LoginForm/>
//         </div>
//     )
// }

// const LoginForm=()=>{
//     return (
//         <form>
//             <div>
//                 <input type="text" />
//             </div>
//             <div>
//             <input type="password" />
//             </div>
//             <div>
//             <input type="checkbox" />
//             </div>
//             <div>
//                 <button>send</button>
//             </div>
//         </form>
//     )
// }