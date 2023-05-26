import { store } from '../../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { addNewPostAC, updateNewPostTextAC } from '../../../../redux/profileReducer'

type MyPostsContainerPropsType = {
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const postsData = store.getState().profileReducer;
    const addNewPost = () => {
        store.dispatch(addNewPostAC())
    }
    const updateNewPostText = (v: string) => {
        store.dispatch(updateNewPostTextAC(v))
    }
    return (
        <MyPosts
            postsData={postsData}
            addNewPost={addNewPost}
            updateNewPostText={updateNewPostText}
        />
    )
}