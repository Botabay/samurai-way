const ADDNEWPOST = 'addNewPost';
const UPDATENEWPOSTTEXT = 'updateNewPostText';

export const addNewPostActionCreator = () => ({ type: ADDNEWPOST })
export const updateNewPostTextActionCreator = (value: string) => ({ type: UPDATENEWPOSTTEXT, value })

const initS= {
    posts: [
      { id: 1, text: 'post1' },
      { id: 2, text: 'post2' },
      { id: 3, text: 'post3' }
    ],
    newPostText: 'this is a place for your post'
  }

export const profileReducer = (state: any = initS, action: any) => {
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
