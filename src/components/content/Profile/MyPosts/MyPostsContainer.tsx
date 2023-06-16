import { store } from '../../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { addNewPostAC, updateNewPostTextAC } from '../../../../redux/profileReducer'
// import { TContext } from '../../../../contextTemp';
import {AppRootStateType} from '../../../../redux/reduxStore'
import { connect } from 'react-redux';

type MyPostsContainerPropsType = {
}

// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     // const postsData = store.getState().profileReducer;
//     const addNewPost = () => {
//         store.dispatch(addNewPostAC())
//     }
//     const updateNewPostText = (v: string) => {
//         store.dispatch(updateNewPostTextAC(v))
//     }
//     return (
//         <TContext.Consumer>
//             {(store:any) => {
//                 return <MyPosts
//                     // postsData={postsData}
//                     postsData={store.getState().profile}
//                     addNewPost={addNewPost}
//                     updateNewPostText={updateNewPostText}
//                 />
//             }
//             }
//         </TContext.Consumer>
//     )
// }

const mapStateToProps=(state:AppRootStateType)=>({
    postsData:state.profile
})

const mapDispatchToProps=(dispatch:any)=>({
    addNewPost : () => 
        dispatch(addNewPostAC()),
    updateNewPostText : (v: string) => 
        dispatch(updateNewPostTextAC(v))    
})

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)
