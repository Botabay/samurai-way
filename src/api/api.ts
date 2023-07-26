import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "29f17b06-ce57-44c0-9728-ae1bcd1096f2"
    }
})

export const usersAPI = {
    getUsersData(pageSize: number = 3, currentPage: number = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    }
}

export const authAPI = {
    getAuthData() {//me-request
        return instance.get(`auth/me`)
    },
    toLogin(body: any) {
        return instance.post(`auth/login`, body)
    },
    toLogout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfileData(id: number = 1) {
        return instance.get(`profile/${id}`)
    },
    getProfileStatus(id: number = 1) {
        return instance.get(`profile/status/${id}`)
    },
    updateProfileStatus(status: string) {
        return instance.put(`profile/status`, { status })
    },
}

export const followAPI = {
    deleteFollowId(id: number = 1) {
        return instance.delete(`follow/${id}`)
    },
    postFollowId(id: number = 1) {
        return instance.post(`follow/${id}`, {})
    }
}