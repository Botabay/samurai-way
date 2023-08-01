import { AnyAction, Dispatch } from "redux";
import { authAPI, securityAPI } from "../api/api";
import { ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "./reduxStore";
import { FormAction, stopSubmit } from "redux-form";

export type UsersDataType = typeof initialState;

export type SetAuthACType = ReturnType<typeof setAuthAC>;
export type SetCaptchaURLType = ReturnType<typeof setCaptchaURL>;

type ActionsType = SetAuthACType | SetCaptchaURLType;

const initialState = {
  email: null as string | null,
  login: null as string | null,
  userId: null as string | null,
  isAuth: false,
  captchaURL: null as string | null,
};
export const authReducer = (
  state: UsersDataType = initialState,
  action: ActionsType
): UsersDataType => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const setAuthAC = ({
  email,
  login,
  userId,
  isAuth,
  captchaURL,
}: UsersDataType) =>
  ({
    type: SET_USER_DATA,
    payload: { email, login, userId, isAuth, captchaURL },
  } as const);
export const setCaptchaURL = ({ URL }: { URL: string }) =>
  ({
    type: SET_CAPTCHA_URL,
    payload: { URL },
  } as const);

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const SET_CAPTCHA_URL = "AUTH/SET_CAPTCHA_URL";

export const getAuthDataTC = () => async (dispatch: Dispatch<AnyAction>) => {
  const res = await authAPI.getAuthData();
  if (res.data.resultCode === 0) {
    dispatch(
      setAuthAC({ ...res.data.data, userId: res.data.data.id, isAuth: true })
    );
  }
  // return res;
};

export const loginTC =
  ({
    email,
    password,
    rememberMe = false,
    captchaURL,
  }: {
    email: string;
    password: string;
    rememberMe: boolean;
    captchaURL: string;
  }) =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType | FormAction>
  ) => {
    const res = await authAPI.toLogin({
      email,
      password,
      rememberMe,
      captchaURL,
    });
    if (res.data.resultCode === 0) {
      dispatch(getAuthDataTC());
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaURL());
      }
      dispatch(
        stopSubmit("login", {
          _error:
            res.data.messages.length > 0
              ? res.data.messages[0]
              : "common error",
        })
      );
    }
  };

export const getCaptchaURL =
  () =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType | FormAction>
  ) => {
    const res = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURL(res.data.url));
  };

export const logoutTC =
  ({
    email,
    password,
    rememberMe = false,
  }: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    const res = await authAPI.toLogout();
    if (res.data.resultCode === 0) {
      dispatch(
        setAuthAC({
          email: null,
          login: null,
          userId: null,
          isAuth: false,
          captchaURL: null,
        })
      );
    }
  };
