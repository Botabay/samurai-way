import {store} from '../../../../redux/reduxStore'
import {updateNewPostTextActionCreator,addNewPostActionCreator} from '../../../../redux/profileReducer'

type MyPostsContainerPropsType={
}
export const MyPostsContainer = (props:MyPostsContainerPropsType) => {
    const postsData=store.getState().profileReducer.posts;    
    return (
        <MyPosts postsData={postsData}/>
    )
}