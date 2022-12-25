import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'abd96315-58cc-42a7-a904-226e13c834ce'
    }
});
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number,term:string='',friend:null | boolean= null) {
        return instance.get(`users`,{
            params: {
                page: currentPage,
                count: pageSize,
                term,
                friend: friend ?? false,
            }
        })
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please, profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}

