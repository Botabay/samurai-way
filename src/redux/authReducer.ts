import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../api/api";

export type UsersDataType = {
    email: string | null
    login: string | null
    userId: string | null
    isAuth: boolean
};
export type setAuthACType = ReturnType<typeof setAuthAC>

type ActionsType = setAuthACType

const initialState: UsersDataType = {
    email: null,
    login: null,
    userId: null,
    isAuth: false,
}
export const authReducer = (state = initialState, action: ActionsType) => {
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

export const toLoginAC = ({ email, login, userId }: UsersDataType) => ({
    type: 'FOLLOW', payload: {
        email, login, userId
    }
}) as const;

export const toLoginTC = () => (dispatch: Dispatch<AnyAction>) => {
    authAPI.getAuthData()
        .then(data => {
            dispatch(setAuthAC({ ...data.data, userId: data.data.id }))
        })
}