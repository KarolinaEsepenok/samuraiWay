import axios from "axios";
import {ProfileType} from "../../state";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8e081d22-ed0c-483c-92a8-b95af3efcf75'
    },
    withCredentials: true
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
    },
    savePhoto(photoFile:any){
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType){
        return instance.put(`profile/`, {
            profile:profile
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

