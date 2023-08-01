import { reduxForm } from "redux-form";
import { maxLength, requiredValueValidator } from "../../utils/validators";
import { Input, createField } from "../../common/FormControlls/FormControlls";
import { connect } from "react-redux";
import { loginTC } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";

const maxLength20 = maxLength(20);
const LoginForm = ({ handleSubmit, error, captchaURL, ...restProps }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(
        "email",
        "email",
        [requiredValueValidator, maxLength20] as any,
        Input
      )}

      {createField(
        "password",
        "password",
        [requiredValueValidator, maxLength20] as any,
        Input,
        { type: "password" }
      )}

      {createField("rememberMe", "password", [] as any, Input, {
        type: "checkbox",
      })}

      {captchaURL && <div>captcha</div>}
      {captchaURL && (
        <div>{createField("captcha", "type a captcha", [], Input, {})}</div>
      )}

      {error && <div>{error}</div>}
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const miniLogin = ({ loginTC, isAuth, captchaURL, ...restProps }: any) => {
  const onSubmit = (dataForm: any) => {
    const { email, password, rememberMe, captcha } = dataForm;
    loginTC({ email, password, rememberMe, captcha });
  };
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div>
      <h1>login</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        //@ts-ignore
        captchaURL={captchaURL}
      />
    </div>
  );
};

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL,
});

export const Login = connect(mapStateToProps, { loginTC })(miniLogin);
