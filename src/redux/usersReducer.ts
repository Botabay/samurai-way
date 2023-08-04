import { followAPI, usersAPI } from "../api/api";

type LocactionType = {
  city: string;
  country: string;
};

export type UserType = {
  id: string;
  avatarUrl: string;
  followed: boolean;
  name: string;
  status: string;
  location: LocactionType;
};

export type setFollowACType = ReturnType<typeof setFollowAC>;
export type setUsersACType = ReturnType<typeof setUsersAC>;
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;
export type toggleIsFollowDisabledACType = ReturnType<
  typeof toggleIsFollowDisabledAC
>;

export type ActionsType =
  | setFollowACType
  | setUsersACType
  | setTotalUsersCountACType
  | setCurrentPageACType
  | toggleIsFetchingACType
  | toggleIsFollowDisabledACType;

const initialState = {
  users: [] as UserType[],
  currentPage: 1,
  pageSize: 50,
  totalUsersCount: 12,
  isFetching: false,
  isFollowDisabled: [] as string[],
};

type UsersDataType = typeof initialState;

export const usersReducer = (
  state: UsersDataType = initialState,
  action: ActionsType
): UsersDataType => {
  switch (action.type) {
    case SET_FOLLOW_VALUE: {
      return {
        ...state,
        users: state.users.map((el: UserType) =>
          el.id === action.userId ? { ...el, followed: action.followValue } : el
        ),
      };
    }
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };
    case TOGGLE_IS_FOLLOW_DISABLED:
      return {
        ...state,
        isFollowDisabled: action.isDisabled
          ? [...state.isFollowDisabled, action.id]
          : state.isFollowDisabled.filter((el) => el !== action.id),
      };
    default:
      return state;
  }
};

export const setFollowAC = (userId: string, followValue: boolean) =>
  ({
    type: SET_FOLLOW_VALUE,
    userId,
    followValue,
  } as const);
export const setUsersAC = (users: UserType[]) =>
  ({
    type: SET_USERS,
    users,
  } as const);
export const setTotalUsersCountAC = (totalUsersCount: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  } as const);
export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const);
export const toggleIsFetchingAC = (value: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    value,
  } as const);
export const toggleIsFollowDisabledAC = (isDisabled: boolean, id: string) =>
  ({
    type: TOGGLE_IS_FOLLOW_DISABLED,
    isDisabled,
    id,
  } as const);

const SET_FOLLOW_VALUE = "USERS/SET_FOLLOW_VALUE";
const SET_USERS = "USERS/SET_USERS";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "USERS/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW_DISABLED = "USERS/TOGGLE_IS_FOLLOW_DISABLED";

export const getUsersDataTC = (pageSize: number, currentPage: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    const res = await usersAPI.getUsersData(pageSize, currentPage);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(res.data.items));
    dispatch(setTotalUsersCountAC(res.data.totalCount));
  };
};

const followTCHelpUtil = async (
  id: string,
  dispatch: any,
  apiMethod: any,
  followValue: boolean
) => {
  dispatch(toggleIsFollowDisabledAC(true, id));
  const res = await apiMethod(+id);
  dispatch(toggleIsFollowDisabledAC(false, id));
  if (res.data.resultCode === 0) {
    dispatch(setFollowAC(id, followValue));
  }
};
export const followTC = (id: string) => {
  return (dispatch: any) => {
    followTCHelpUtil(id, dispatch, followAPI.postFollowId, true);
  };
};
export const unfollowTC = (id: string) => {
  return (dispatch: any) => {
    followTCHelpUtil(id, dispatch, followAPI.deleteFollowId, false);
  };
};
