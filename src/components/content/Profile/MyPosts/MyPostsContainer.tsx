import { store } from '../../../../redux/reduxStore';
import { MyPosts } from './MyPosts';

type MyPostsContainerPropsType = {
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const postsData = store.getState().profileReducer.posts;
    return (
        <MyPosts postsData={postsData} />
    )
}