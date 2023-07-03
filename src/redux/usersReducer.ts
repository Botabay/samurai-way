type LocactionType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    avatarUrl: string
    follow: boolean
    // fullName: string
    name:string
    status: string
    location: LocactionType
}
export type UsersDataType = UserType[];
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
type ActionsType = followACType | unfollowACType | setUsersACType

// const initialState: UsersDataType = [
//     {
//         id: '1', avatarUrl: '',
//         follow: true, name: 'Lee', status: 'sleeping', location: { city: 'B', country: 'AS' }
//     },
//     {
//         id: '2', avatarUrl: '',
//         follow: false, name: 'Lee', status: 'sleeping', location: { city: 'B', country: 'AS' }
//     },
// ]
const initialState: UsersDataType = [
]
export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW': return state.map((el: UserType) =>
            el.id === action.userId ? { ...el, follow: true } : el);
        case 'UNFOLLOW': return state.map((el: UserType) =>
            el.id === action.userId ? { ...el, follow: false } : el);
        case 'SET_USERS': return [...action.users];
        default: return state;
    }
}

export const followAC = (userId: string) => ({ type: 'FOLLOW', userId }) as const;
export const unfollowAC = (userId: string) => ({ type: 'UNFOLLOW', userId }) as const;
export const setUsersAC = (users: UsersDataType) => ({ type: 'SET_USERS', users }) as const;