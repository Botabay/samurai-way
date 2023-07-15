import { MyPosts } from './MyPosts';
import { addNewPostAC, updateNewPostTextAC } from '../../../../redux/profileReducer'
import {AppRootStateType} from '../../../../redux/reduxStore'
import { connect } from 'react-redux';

const mapStateToProps=(state:AppRootStateType)=>({
    postsData:state.profile
})

const mapDispatchToProps=(dispatch:any)=>({
    addNewPost : (value:string) => 
        dispatch(addNewPostAC(value)),
    updateNewPostText : (v: string) => 
        dispatch(updateNewPostTextAC(v))    
})

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)
