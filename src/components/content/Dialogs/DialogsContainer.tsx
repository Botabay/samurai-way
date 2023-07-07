import { AppRootStateType, store } from '../../../redux/reduxStore';
import { addNewMessageAC, updateNewMessageTextAC } from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state: AppRootStateType) => ({
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText,
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = (dispatch: any) => ({
    updateNewMessageText: (v: string) =>
        dispatch(updateNewMessageTextAC(v)),
    addNewMessage: () =>
        store.dispatch(addNewMessageAC())

})

export const DialogsContainer = connect(mapStateToProps,
    mapDispatchToProps)(Dialogs)