import { profileAPI } from "../api/api";

const ADDNEWPOST = 'addNewPost';
const UPDATENEWPOSTTEXT = 'updateNewPostText';

type addNewPostACType = ReturnType<typeof addNewPostAC>
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
type toSetUserProfileACType = ReturnType<typeof toSetUserProfileAC>

type ActionsType = addNewPostACType |
    updateNewPostTextACType |
    toSetUserProfileACType

export type PostsType = {
    id: number,
    text: string;
}
export type ProfileDataType = {
    posts: PostsType[]
    newPostText: string
    profile: any
}
const initS: ProfileDataType = {
    posts: [
        { id: 1, text: 'post1' },
        { id: 2, text: 'post2' },
        { id: 3, text: 'post3' }
    ],
    newPostText: 'this is a place for your post',
    profile: null
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
        default: return state
    }
}

export const addNewPostAC = () => ({ type: ADDNEWPOST }) as const
export const updateNewPostTextAC = (value: string) =>
    ({ type: UPDATENEWPOSTTEXT, value }) as const
export const toSetUserProfileAC = (value: string) =>
    ({ type: 'SET_USER_PROFILE', value }) as const

export const getProfileDataTC = (id: number) => (dispatch: any) => {
    profileAPI.getProfileData(id)
        .then(data => dispatch(toSetUserProfileAC(data)))
}