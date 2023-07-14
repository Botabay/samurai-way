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
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuthData() {
        return instance
            .get(`auth/me`)
            .then(res => {
                if (res.data.resultCode === 0) {
                    return res.data
                }
            })
    }
}

export const profileAPI = {
    getProfileData(id: number = 1) {
        return instance
            .get(`profile/${id}`)
            .then(res => res.data)
    },
    getProfileStatus(id: number = 1){
        return instance
            .get(`profile/status/${id}`)
            .then(res => res.data)
    },
    updateProfileStatus(status:string){
        return instance
            .put(`profile/status`,{status})
            .then(res => res.data)
    },
}

export const followAPI = {
    deleteFollowId(id: number = 1) {
        return instance
            .delete(`follow/${id}`)
            .then(res => res.data)
    },
    postFollowId(id: number = 1) {
        return instance
            .post(`follow/${id}`, {})
            .then(res => res.data)
    }
}