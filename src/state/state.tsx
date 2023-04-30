import { rerender } from "../rerender"

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
};
export type ProfilePageType = {
  posts:PostType[]
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
    ]
  }  ,
  profilePage: {
    posts: [
      { id: 1, text: 'post1' },
      { id: 2, text: 'post2' },
      { id: 3, text: 'post3' }
    ]
  },
  subjects: {
    friends: [
      { id: 1, name: 'Ahn' },
      { id: 2, name: 'Jo' },
      { id: 3, name: 'Bob' }
    ]
  },
}

export const add=(obj:MessageType)=>{
  state.profilePage.posts.push(obj);
  rerender()
}