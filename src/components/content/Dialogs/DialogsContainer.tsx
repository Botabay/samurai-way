import { AppRootStateType, store } from '../../../redux/reduxStore';
import { addNewMessageAC, updateNewMessageTextAC } from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withRedirectHoc } from '../../../HOCs/withRedirectHoc';

const WithRedirect = withRedirectHoc(Dialogs)

const mapStateToProps = (state: AppRootStateType) => ({
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
    newMessageText: state.dialogs.newMessageText,
})

const mapDispatchToProps = (dispatch: any) => ({
    updateNewMessageText: (v: string) =>
        dispatch(updateNewMessageTextAC(v)),
    addNewMessage: () =>
        store.dispatch(addNewMessageAC())

})

export const DialogsContainer = connect(mapStateToProps,
    mapDispatchToProps)(WithRedirect)