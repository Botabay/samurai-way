import { createRef } from 'react'

type NewPostPropsType = {
    newPostText: string
    addNewPost: () => void
    updateNewPostText: (v: string) => void
}

export const NewPost = ({
    newPostText,
    addNewPost,
    updateNewPostText
}: NewPostPropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const onClickHandler = () => {
        addNewPost()
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={newPostText}
                    onChange={(e) => {
                        updateNewPostText(e.currentTarget.value)
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}