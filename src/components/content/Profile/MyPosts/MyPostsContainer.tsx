import { store } from '../../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { addNewPostActionCreator } from '../../../../redux/profileReducer'
import { updateNewPostTextActionCreator } from '../../../../redux/profileReducer'

type MyPostsContainerPropsType = {
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const postsData = store.getState().profileReducer;
    const addNewPostActionCreatorTempCallback = () => {
        store.dispatch(addNewPostActionCreator())
    }
    const updateNewPostTextActionCreatorTempCallback = (v:string) => {
        store.dispatch(updateNewPostTextActionCreator(v))
    }
    return (
        <MyPosts
        postsData={postsData}
            addNewPostActionCreatorTempCallback={addNewPostActionCreatorTempCallback}
            updateNewPostTextActionCreatorTempCallback={updateNewPostTextActionCreatorTempCallback}
        />
    )
}