import { createRef } from 'react'

type NewPostPropsType = {
    title: string
    newItemText: string
    addNewItem: () => void
    updateNewItemText: (v: string) => void
}

export const NewItem = ({
    title,
    newItemText,
    addNewItem,
    updateNewItemText
}: NewPostPropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const onClickHandler = () => {
        addNewItem()
    }
    return (
        <div>{title}
            <div>
                <textarea ref={textareaRef} value={newItemText}
                    onChange={(e) => {
                        updateNewItemText(e.currentTarget.value)
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}