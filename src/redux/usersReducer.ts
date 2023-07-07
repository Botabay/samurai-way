type LocactionType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    avatarUrl: string
    followed: boolean
    // fullName: string
    name: string
    status: string
    location: LocactionType
}
export type UsersDataType = {
    users: UserType[],
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    isFetching: boolean,
    isFollowDisabled: number[]
};
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type toggleIsFollowDisabledACType = ReturnType<typeof toggleIsFollowDisabledAC>

type ActionsType = followACType |
    unfollowACType |
    setUsersACType |
    setTotalUsersCountACType |
    setCurrentPageACType |
    toggleIsFetchingACType |
    toggleIsFollowDisabledACType

const initialState: UsersDataType = {
    users: [],
    currentPage: 1,
    pageSize: 4,
    totalUsersCount: 12,
    isFetching: false,
    isFollowDisabled: []
}
export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW': return {
            ...state,
            users: state.users.map((el: UserType) =>
                el.id === action.userId ? { ...el, followed: true } : el)
        };
        case 'UNFOLLOW': return {
            ...state,
            users: state.users.map((el: UserType) =>
                el.id === action.userId ? { ...el, followed: false } : el)
        };
        case 'SET_USERS': return { ...state, users: [...action.users] };
        case 'SET_TOTAL_USERS_COUNT': return { ...state, totalUsersCount: action.totalUsersCount }
        case 'SET_CURRENT_PAGE': return { ...state, currentPage: action.currentPage }
        case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.value }
        case 'TOGGLE_IS_FOLLOW_DISABLED': return {
            ...state,
            isFollowDisabled: action.isDisabled ? [...state.isFollowDisabled,action.id]
            :state.isFollowDisabled.filter(el => el !== +action.id)
        }
        default: return state;
    }
}

export const followAC = (userId: string) => ({ type: 'FOLLOW', userId }) as const;
export const unfollowAC = (userId: string) => ({ type: 'UNFOLLOW', userId }) as const;
export const setUsersAC = (users: UserType[]) => ({ type: 'SET_USERS', users }) as const;
export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount }) as const;
export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage }) as const;
export const toggleIsFetchingAC = (value: boolean) => ({ type: 'TOGGLE_IS_FETCHING', value }) as const;
export const toggleIsFollowDisabledAC = (isDisabled: boolean, id: string) => ({ type: 'TOGGLE_IS_FOLLOW_DISABLED', isDisabled, id }) as const;