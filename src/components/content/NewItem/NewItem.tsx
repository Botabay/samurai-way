import { createRef } from 'react'
import { Field, reduxForm } from 'redux-form'

type NewItemPropsType = {
    title: string
    newItemText: string
    addNewItem: (value:string) => void
    updateNewItemText: (v: string) => void
}

export const NewItem = ({
    title,
    newItemText,
    addNewItem,
    updateNewItemText
}: NewItemPropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    // const onClickHandler = () => {
    //     console.log('send', addNewItem);
    //     addNewItem('something')
    // }
    const onSubmit = (dataForm: any) => {      
        addNewItem(dataForm.profileTextarea)
        dataForm.profileTextarea='';
    }
    return (
        <div>{title}
            <ReduxForm
                //@ts-ignore
                // ref={textareaRef}
                // newItemText={newItemText}
                // updateNewItemText={updateNewItemText}
                // onClickHandler={onClickHandler}
                onSubmit={onSubmit}
            />
        </div>
    )
}

const NewItemForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'profileTextarea'}
                placeholder={''}
                component="textarea"
                // ref={props.textareaRef}
                // value={props.newItemText}
                // onChange={(e: any) => {
                //     props.updateNewItemText(e.currentTarget.value)
                // }}
            />
            <div>
                <button onClick={props.onClickHandler}>send</button>
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({ form: 'profileForm' })(NewItemForm)