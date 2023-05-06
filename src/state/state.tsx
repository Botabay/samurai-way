// let rerender=(c:any)=>{
//   console.log('');
//  };
export type MessageType = {
  id: number,
  text: string
}
export type DialogType = {
  id: number,
  name: string
}
export type PostType = {
  id: number,
  text: string
}
export type FriendType = {
  id: number,
  name: string
}

export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageText: string
};
export type ProfilePageType = {
  posts: PostType[],
  newPostText: string
};
export type SubjectsType = {
  friends: FriendType[]
};

export type PageType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  subjects: SubjectsType
}

export const store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' },
        { id: 3, name: 'John' }
      ],
      messages: [
        { id: 1, text: 'Hallo everybody' },
        { id: 2, text: 'Hey, zuuuup!' },
        { id: 3, text: 'yo' },
        { id: 4, text: 'Hey guys!' },
      ],
      newMessageText: 'this is a place for your message'
    },
    profilePage: {
      posts: [
        { id: 1, text: 'post1' },
        { id: 2, text: 'post2' },
        { id: 3, text: 'post3' }
      ],
      newPostText: 'this is a place for your post'
    },
    subjects: {
      friends: [
        { id: 1, name: 'Ahn' },
        { id: 2, name: 'Jo' },
        { id: 3, name: 'Bob' }
      ]
    },
  },
  getState() { return this._state },
  addNewPost() {
    this._state.profilePage.posts.push({ id: 4, text: this._state.profilePage.newPostText });
    this._state.profilePage.newPostText = ''
    this.rerender(this._state)
  },
  updateNewPostText(value: string)  {
    console.log(value);    ////////////////
    this._state.profilePage.newPostText = value;
    console.log(this._state.profilePage.newPostText);////////
    this.rerender(this._state)
  },
  addNewMessage () {
    this._state.dialogsPage.messages.push({ id: 4, text: this._state.dialogsPage.newMessageText })
    this._state.dialogsPage.newMessageText = ''
    this.rerender(this._state)
  },
   updateNewMessageText (value: string)  {
    this._state.dialogsPage.newMessageText = value;
    this.rerender(this._state)
  },
   subscribe  (observer: any)  {
    this.rerender = observer;
  },
  rerender (c:any){
    console.log('');
   }
}
/** 06.05.2023
 * // import { rerender } from "../rerender"

let rerender=(c:any)=>{///////////////
  console.log('');
 };
export type MessageType = {
  id: number,
  text: string
}
export type DialogType = {
  id: number,
  name: string
}
export type PostType = {
  id: number,
  text: string
}
export type FriendType = {
  id: number,
  name: string
}

export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageText:string
};
export type ProfilePageType = {
  posts:PostType[],
  newPostText:string
};
export type SubjectsType = {
  friends:FriendType[]
};

export type PageType = {
  dialogsPage:  DialogsPageType
  profilePage: ProfilePageType
  subjects: SubjectsType
}



export const state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Lee' },
      { id: 2, name: 'Kim' },
      { id: 3, name: 'John' }
    ],
    messages: [
      { id: 1, text: 'Hallo everybody' },
      { id: 2, text: 'Hey, zuuuup!' },
      { id: 3, text: 'yo' },
      { id: 4, text: 'Hey guys!' },
    ],
    newMessageText:'this is a place for your message'
  }  ,
  profilePage: {
    posts: [
      { id: 1, text: 'post1' },
      { id: 2, text: 'post2' },
      { id: 3, text: 'post3' }
    ],
    newPostText:'this is a place for your post'
  },
  subjects: {
    friends: [
      { id: 1, name: 'Ahn' },
      { id: 2, name: 'Jo' },
      { id: 3, name: 'Bob' }
    ]
  },
}

// export const add=(obj:MessageType)=>{
//   state.profilePage.posts.push(obj);
//   rerender(state)
// }
export const addNewPost=()=>{
    state.profilePage.posts.push({id:4,text:state.profilePage.newPostText});
    state.profilePage.newPostText=''
    rerender(state)
  }
export const updateNewPostText=(value:string)=>{
  state.profilePage.newPostText=value;
  rerender(state)
}

export const addNewMessage=()=>{
  state.dialogsPage.messages.push({id:4,text:state.dialogsPage.newMessageText})
  state.dialogsPage.newMessageText=''
  rerender(state)
}
export const updateNewMessageText=(value:string)=>{
state.dialogsPage.newMessageText=value;
rerender(state)
}

export const subscribe=(observer:any)=>{//////////////////
  rerender=observer;
}
 */