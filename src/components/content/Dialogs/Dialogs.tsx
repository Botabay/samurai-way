import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { MessageType, DialogType, } from '../../../redux/dialogReducer'
import { NewItem } from '../NewItem/NewItem'

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
    isAuth: boolean
    updateNewMessageText: (v: string) => void
    addNewMessage: () => void
}

export const Dialogs = ({
    dialogs,
    messages,
    updateNewMessageText,
    addNewMessage,
    newMessageText
}: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {
                    dialogs.map((el: any) =>
                        <Dialog key={el.id} id={el.id} name={el.name} />)
                }
            </div>
            <div className="messageItems">
                {
                    messages.map((el: any, ind: number) =>
                        <Message key={ind} text={el.text} />)
                }
            </div>
            <NewItem
                title={'new message'}
                newItemText={newMessageText}
                updateNewItemText={updateNewMessageText}
                addNewItem={addNewMessage}
            />
        </div>

    )
}