import { AnyAction, Dispatch } from "redux";
import { profileAPI } from "../api/api";

const ADDNEWPOST = 'addNewPost';
const UPDATENEWPOSTTEXT = 'updateNewPostText';

type addNewPostACType = ReturnType<typeof addNewPostAC>
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type toSetUserProfileACType = ReturnType<typeof toSetUserProfileAC>
type toGetStatusACType = ReturnType<typeof toGetStatusAC>
type toUdateStatusACType = ReturnType<typeof toUpdateStatusAC>

type ActionsType = addNewPostACType
    | updateNewPostTextACType
    | toSetUserProfileACType
    | toGetStatusACType
    | toUdateStatusACType

export type PostsType = {
    id: number,
    text: string;
}
export type ProfileDataType = {
    posts: PostsType[]
    newPostText: string
    profile: any
    status: string
}
const initS: ProfileDataType = {
    posts: [
        { id: 1, text: 'post1' },
        { id: 2, text: 'post2' },
        { id: 3, text: 'post3' }
    ],
    newPostText: 'this is a place for your post',
    profile: null,
    status: ''
}

export const profileReducer = (
    state: ProfileDataType = initS,
    action: ActionsType
) => {
    switch (action.type) {
        // case ADDNEWPOST: addNewPost(state,state.newPostText);break;
        case ADDNEWPOST: {
            // state.posts.push({ id: state.posts.length + 1, text: state.newPostText });
            // state.newPostText = '';
            //return state;
            return {
                ...state, posts: [
                    { id: state.posts.length + 1, text: state.newPostText }, ...state.posts
                ], newPostText: ''
            }
        }
        case UPDATENEWPOSTTEXT: {
            // state.newPostText = action.value;
            return { ...state, newPostText: action.value };
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

export const addNewPostAC = () => ({ type: ADDNEWPOST }) as const
export const updateNewPostTextAC = (value: string) =>
    ({ type: UPDATENEWPOSTTEXT, value }) as const
export const toSetUserProfileAC = (value: string) =>
    ({ type: 'SET_USER_PROFILE', value }) as const
export const toGetStatusAC = (value: string) =>
    ({ type: 'SET_STATUS', value }) as const
export const toUpdateStatusAC = (value: string) =>
    ({ type: 'UPDATE_STATUS', value }) as const

export const getProfileDataTC = (id: number) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.getProfileData(id)
        .then(data => dispatch(toSetUserProfileAC(data)))
}
export const getProfileStatusTC = (id: number) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.getProfileStatus(id)
        .then(data => dispatch(toGetStatusAC(data)))
}
export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch<AnyAction>) => {
    profileAPI.updateProfileStatus(status)
        .then(data => dispatch(toUpdateStatusAC(data)))
}