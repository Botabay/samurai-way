export type FriendType={
  id:number,
  name:string;
}
export type SubjectDataType= typeof initS;
const initS= {
    friends: [
      { id: 1, name: 'Ahn' },
      { id: 2, name: 'Jo' },
      { id: 3, name: 'Bob' }
    ] as FriendType[]
  }
export const subjectReducer = (state: SubjectDataType= initS, action: any) => state