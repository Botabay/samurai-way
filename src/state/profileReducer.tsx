const ADDNEWPOST = 'addNewPost';
export const addNewPostActionCreator = () => ({ type: ADDNEWPOST })
const UPDATENEWPOSTTEXT = 'updateNewPostText';
export const updateNewPostTextActionCreator = (value: string) => ({ type: UPDATENEWPOSTTEXT, value })

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADDNEWPOST: {
            state.posts.push({ id: 4, text: state.newPostText });
            state.newPostText = '';
            return state;
        }
        case UPDATENEWPOSTTEXT: {
            state.newPostText = action.value;
            return state;
        }
        default: return state
    }
}
