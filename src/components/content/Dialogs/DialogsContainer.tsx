import { AppRootStateType, store } from '../../../redux/reduxStore';
import { addNewMessageAC } from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withRedirectHoc } from '../../../HOCs/withRedirectHoc';
import { compose } from 'redux';

const mapStateToProps = (state: AppRootStateType) => ({
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages
})

const mapDispatchToProps = (dispatch: any) => ({
    addNewMessage: (value:string) =>
        store.dispatch(addNewMessageAC(value))

})

export const DialogsContainer = compose(
    withRedirectHoc,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)