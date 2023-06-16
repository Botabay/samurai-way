import { createRef } from 'react'

type NewItemPropsType = {
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
}: NewItemPropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const onClickHandler = () => {
        console.log('send',addNewItem);
        
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