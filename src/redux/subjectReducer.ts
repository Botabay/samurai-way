export type FriendType={
  id:number,
  name:string;
}
export type SubjectDataType={
  friends:FriendType[]
}
const initS:SubjectDataType= {
    friends: [
      { id: 1, name: 'Ahn' },
      { id: 2, name: 'Jo' },
      { id: 3, name: 'Bob' }
    ]
  }
export const subjectReducer = (state: SubjectDataType= initS, action: any) => state