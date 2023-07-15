import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../api/api";

export type UsersDataType = typeof initialState
// {
//     email: string | null
//     login: string | null
//     userId: string | null
//     isAuth: boolean
// };
export type setAuthACType = ReturnType<typeof setAuthAC>

type ActionsType = setAuthACType

const initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
}
export const authReducer = (state:UsersDataType = initialState, action: ActionsType):UsersDataType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        }
        default: return state;
    }
}

export const setAuthAC = ({ email, login, userId }: UsersDataType) => ({
    type: 'FOLLOW', payload: {
        email, login, userId
    }
}) as const;

export const getAuthDataTC = () => (dispatch: Dispatch<AnyAction>) => {
    authAPI.getAuthData()
        .then(data => {
            dispatch(setAuthAC({ ...data.data, userId: data.data.id }))
        })
}
