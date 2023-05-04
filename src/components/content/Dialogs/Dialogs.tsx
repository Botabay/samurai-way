import { createRef } from 'react'
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { DialogsPageType } from './../../../state/state'

type NewMessagePropsType={
    newMessageText:string
    addNewMessageText:(value:string)=>void
}
const NewMessage = (props:NewMessagePropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={props.newMessageText}
                    onChange={(e) => {
                        props.addNewMessageText(e.currentTarget.value)
                }}></textarea>
            </div>
            <button onClick={() => { console.log(textareaRef.current?.value) }}>send</button>
        </div>
    )
}


type DialogsPropsType = {
    state: DialogsPageType
    newMessageText:string
    addNewMessageText:(value:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsData = props.state.dialogs;
    const messagesData = props.state.messages;
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogsData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messagesData.map((el, ind) => <Message key={ind} text={el.text} />)}
            </div>
            <NewMessage newMessageText={newMessageText}     addNewMessageText={addNewMessageText}/>
        </div>
    )
}

/**
 * type NewPostPropsType={
    callback:()=>void
    newPostText:string
    addNewPostText:(value:string)=>void
}

const NewPost = (props:NewPostPropsType) => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    const onClickHandler=()=>{
        // props.callback({id:4,text:''+textareaRef.current?.value});
        props.callback();
        if (textareaRef.current?.value) textareaRef.current.value='';
        // props.addNewPostText('')
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={props.newPostText}
                onChange={(e)=>{
                    props.addNewPostText(e.currentTarget.value)
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}

type MyPostsPropsType={
    state: PostType[]
    // callback:(obj:MessageType)=>void
    callback:()=>void
    newPostText:string
    addNewPostText:(value:string)=>void
}
export const MyPosts = (props:MyPostsPropsType) => {
    const postsData=props.state;    
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost callback={props.callback} newPostText={props.newPostText} addNewPostText={props.addNewPostText}/>
            <div>list of posts
            {postsData.map(el => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}
 */