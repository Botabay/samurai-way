import s from "./Dialogs.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { MessageType, DialogType } from "../../../redux/dialogReducer";
import { NewItem } from "../NewItem/NewItem";

type DialogsPropsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  isAuth: boolean;
  addNewMessage: () => void;
};

export const Dialogs = ({
  dialogs,
  messages,
  addNewMessage,
}: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className="dialogItems">
        {dialogs.map((el: DialogType) => (
          <Dialog key={el.id} id={el.id} name={el.name} />
        ))}
      </div>
      <div className="messageItems">
        {messages.map((el: MessageType, ind: number) => (
          <Message key={ind} text={el.text} />
        ))}
      </div>
      <NewItem title={"new message"} addNewItem={addNewMessage} />
    </div>
  );
};
