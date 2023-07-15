import { MyPosts } from './MyPosts';
import { addNewPostAC } from '../../../../redux/profileReducer'
import {AppRootStateType} from '../../../../redux/reduxStore'
import { connect } from 'react-redux';

const mapStateToProps=(state:AppRootStateType)=>({
    postsData:state.profile
})

const mapDispatchToProps=(dispatch:any)=>({
    addNewPost : (value:string) => 
        dispatch(addNewPostAC(value)) 
})

export const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)
