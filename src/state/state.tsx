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

export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
};
export type ProfilePageType = {
  posts:PostType[]
};

export type PageType = {
  dialogsPage:  DialogsPageType
  profilePage: ProfilePageType
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
  }
  ,
  profilePage: {
    posts: [
      { id: 1, text: 'post1' },
      { id: 2, text: 'post2' },
      { id: 3, text: 'post3' }
    ]
  }
}