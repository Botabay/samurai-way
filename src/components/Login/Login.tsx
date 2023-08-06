import { InjectedFormProps, reduxForm } from "redux-form";
import { maxLength, requiredValueValidator } from "../../utils/validators";
import { Input, createField } from "../../common/FormControlls/FormControlls";
import { connect } from "react-redux";
import { loginTC, LoginTCPropsType } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../../redux/reduxStore";

const maxLength20 = maxLength(20);

type LoginFormOwnProps = {
  captchaURL: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginTCPropsType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaURL, ...restProps }: any) => {
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

const LoginReduxForm = reduxForm<LoginTCPropsType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

const MiniLogin: React.FC<StateProps & DispatchProps> = ({
  loginTC,
  isAuth,
  captchaURL,
  ...restProps
}) => {
  const onSubmit = (dataForm: any) => {
    const { email, password, rememberMe, captcha } = dataForm;
    loginTC({ email, password, rememberMe, captchaURL: captcha });
  };
  return isAuth ? (
    <Navigate to={"/profile"} />
  ) : (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL} />
    </div>
  );
};

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL,
});

const mapDispatchToProps = { loginTC };

export const Login = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  AppRootStateType
>(
  mapStateToProps,
  mapDispatchToProps
)(MiniLogin);

type StateProps = ReturnType<typeof mapStateToProps>;
//type DispatchProps = typeof mapDispatchToProps;
type DispatchProps = {
  loginTC: ({
    email,
    password,
    rememberMe,
    captchaURL,
  }: LoginTCPropsType) => void;
};
type OwnProps = unknown; //???

// type Props = StateProps & DispatchProps & OwnProps;
