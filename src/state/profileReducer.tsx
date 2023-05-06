const ADDNEWPOST = 'addNewPost';
export const addNewPostActionCreator = () => ({ type: ADDNEWPOST })
const UPDATENEWPOSTTEXT = 'updateNewPostText';
export const updateNewPostTextActionCreator = (value: string) => ({ type: UPDATENEWPOSTTEXT, value })

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADDNEWPOST: {
            state.profilePage.posts.push({ id: 4, text: state.profilePage.newPostText });
            state.profilePage.newPostText = ''
            //   callSubscriber(state);
            break
        }
        case UPDATENEWPOSTTEXT: {
            state.profilePage.newPostText = action.value;
            //   callSubscriber(state)
            break
        }
        default: return state
    }
}
