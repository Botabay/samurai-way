import { Field, reduxForm } from 'redux-form'
import { maxLength, requiredValueValidator } from '../../../utils/validators'
import { Textarea } from '../../../common/FormControlls/FormControlls'

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
const maxLength10 = maxLength(10);
const NewItemForm = ({ handleSubmit, ...props }: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={'profileTextarea'}
                placeholder={''}
                component={Textarea}
                validate={[requiredValueValidator, maxLength10]}
            />
            <div>
                <button >send</button>
            </div>
        </form>
    )
}

const ReduxForm = reduxForm({ form: 'profileForm' })(NewItemForm)