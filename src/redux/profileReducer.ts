import { AnyAction, Dispatch } from "redux";
import { profileAPI } from "../api/api";

const ADDNEWPOST = 'addNewPost';

type addNewPostACType = ReturnType<typeof addNewPostAC>
type toSetUserProfileACType = ReturnType<typeof toSetUserProfileAC>
type toGetStatusACType = ReturnType<typeof toGetStatusAC>
type toUdateStatusACType = ReturnType<typeof toUpdateStatusAC>

type ActionsType = addNewPostACType
    | toSetUserProfileACType
    | toGetStatusACType
    | toUdateStatusACType

export type PostsType = {
    id: number,
    text: string;
}

const initS = {
    posts: [
        { id: 1, text: 'post1' },
        { id: 2, text: 'post2' },
        { id: 3, text: 'post3' }
    ] as PostsType[],
    profile: null as null | string,
    status: ''
}

export type ProfileDataType = typeof initS

export const profileReducer = (
    state: ProfileDataType = initS,
    action: ActionsType
): ProfileDataType => {
    switch (action.type) {
        case ADDNEWPOST: {
            return {
                ...state, posts: [
                    { id: state.posts.length + 1, text: action.value }, ...state.posts
                ]
            }
        }
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.value };
        }
        case 'SET_STATUS': {
            return { ...state, status: action.value }
        }
        case 'UPDATE_STATUS': {
            return { ...state, status: action.value }
        }
        default: return state
    }
}

export const addNewPostAC = (value: string) => ({ type: ADDNEWPOST, value }) as const
export const toSetUserProfileAC = (value: string) =>
    ({ type: 'SET_USER_PROFILE', value }) as const
export const toGetStatusAC = (value: string) =>
    ({ type: 'SET_STATUS', value }) as const
export const toUpdateStatusAC = (value: string) =>
    ({ type: 'UPDATE_STATUS', value }) as const

export const getProfileDataTC = (id: number) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.getProfileData(id)
        .then(res=> dispatch(toSetUserProfileAC(res.data)))
}
export const getProfileStatusTC = (id: number) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.getProfileStatus(id)
        .then(res => dispatch(toGetStatusAC(res.data)))
}
export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.updateProfileStatus(status)
        .then(res => {
            if (res.data.resultCode === 0)
                dispatch(toUpdateStatusAC(status))
        })
}