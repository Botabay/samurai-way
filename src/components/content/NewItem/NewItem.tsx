import { Field, reduxForm } from 'redux-form'

type NewItemPropsType = {
    title: string
    addNewItem: (value: string) => void
}

export const NewItem = ({
    title,
    addNewItem
}: NewItemPropsType) => {
    const onSubmit = (dataForm: any) => {
        addNewItem(dataForm.profileTextarea)
        dataForm.profileTextarea = '';
    }
    return (
        <div>{title}
            <ReduxForm
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
            />
            <div>
                <button >send</button>
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({ form: 'profileForm' })(NewItemForm)