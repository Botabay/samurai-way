type LocactionType = {
    city: string
    country: string
}
type UserType = {
    id: string
    fullName: string
    status: string
    location: LocactionType
}
export type UsersDataType = UserType[];
export type tempACType = ReturnType<typeof tempAC>
type ActionsType = tempACType

const initialState: UsersDataType = [
    { id: '1', fullName: 'Lee', status: 'sleeping', location: { city: 'B', country: 'AS' } },
    { id: '2', fullName: 'Lee', status: 'sleeping', location: { city: 'B', country: 'AS' } },
]

export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case '': return state;
        default: return state;
    }
}

export const tempAC = () => ({ type: '' }) as const;