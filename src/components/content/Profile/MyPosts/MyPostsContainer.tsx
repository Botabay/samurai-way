import { store } from '../../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { addNewPostAC, updateNewPostTextAC } from '../../../../redux/profileReducer'
import { TContext } from '../../../../contextTemp';

type MyPostsContainerPropsType = {
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    // const postsData = store.getState().profileReducer;
    const addNewPost = () => {
        store.dispatch(addNewPostAC())
    }
    const updateNewPostText = (v: string) => {
        store.dispatch(updateNewPostTextAC(v))
    }
    return (
        <TContext.Consumer>
            {(store) => <MyPosts
                // postsData={postsData}
                postsData={store.getState()}
                addNewPost={addNewPost}
                updateNewPostText={updateNewPostText}
            />}
        </TContext.Consumer>
    )
}