import { AnyAction, Dispatch } from "redux";
import { profileAPI } from "../api/api";

type addNewPostACType = ReturnType<typeof addNewPostAC>;
type toSetUserProfileACType = ReturnType<typeof toSetUserProfileAC>;
type toGetStatusACType = ReturnType<typeof toGetStatusAC>;
type toUdateStatusACType = ReturnType<typeof toUpdateStatusAC>;
type saveFileACType = ReturnType<typeof saveFileAC>;

type ActionsType =
  | addNewPostACType
  | toSetUserProfileACType
  | toGetStatusACType
  | toUdateStatusACType
  | saveFileACType;

export type PostsType = {
  id: number;
  text: string;
};

const initS = {
  posts: [
    { id: 1, text: "post1" },
    { id: 2, text: "post2" },
    { id: 3, text: "post3" },
  ] as PostsType[],
  profile: null as null | {},
  status: "",
};

export type ProfileDataType = typeof initS;

export const profileReducer = (
  state: ProfileDataType = initS,
  action: ActionsType
): ProfileDataType => {
  switch (action.type) {
    case ADD_NEW_POST: {
      return {
        ...state,
        posts: [
          { id: state.posts.length + 1, text: action.value },
          ...state.posts,
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.value };
    }
    case SET_STATUS: {
      return { ...state, status: action.value };
    }
    case UPDATE_STATUS: {
      return { ...state, status: action.value };
    }
    case UPDATE_PHOTO: {
      return { ...state, profile: { ...state.profile, photo: action.value } };
    }
    default:
      return state;
  }
};

const ADD_NEW_POST = "PROFILE/ADD_NEW_POST";
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
const SET_STATUS = "PROFILE/SET_STATUS";
const UPDATE_STATUS = "PROFILE/UPDATE_STATUS";
const UPDATE_PHOTO = "PROFILE/UPDATE_PHOTO";

export const addNewPostAC = (value: string) =>
  ({
    type: ADD_NEW_POST,
    value,
  } as const);
export const toSetUserProfileAC = (value: string) =>
  ({
    type: SET_USER_PROFILE,
    value,
  } as const);
export const toGetStatusAC = (value: string) =>
  ({
    type: SET_STATUS,
    value,
  } as const);
export const toUpdateStatusAC = (value: string) =>
  ({
    type: UPDATE_STATUS,
    value,
  } as const);
export const saveFileAC = (file: any) =>
  ({
    type: UPDATE_PHOTO,
    value: file,
  } as const);

export const getProfileDataTC =
  (id: number) => async (dispatch: Dispatch<AnyAction>) => {
    const res = await profileAPI.getProfileData(id);
    dispatch(toSetUserProfileAC(res.data));
  };
export const getProfileStatusTC =
  (id: number) => async (dispatch: Dispatch<AnyAction>) => {
    const res = await profileAPI.getProfileStatus(id);
    dispatch(toGetStatusAC(res.data));
  };
export const updateProfileStatusTC =
  (status: string) => async (dispatch: Dispatch<AnyAction>) => {
    const res = await profileAPI.updateProfileStatus(status);
    if (res.data.resultCode === 0) dispatch(toUpdateStatusAC(status));
  };

export const saveFile =
  (file: any) => async (dispatch: Dispatch<AnyAction>) => {
    const res = await profileAPI.saveFile(file);
    if (res.data.resultCode === 0)
      dispatch(toUpdateStatusAC(res.data.data.photos));
  };
