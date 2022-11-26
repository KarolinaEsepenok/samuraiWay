import axios from "axios";




const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'abd96315-58cc-42a7-a904-226e13c834ce'
    }


});
export const usersAPI = {
    getUsers(currentPage:1,pageSize:10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId:number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{}, )
    },
    unfollow(userId:number){
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}
{/*export const getUsers=(currentPage:number,pageSize:number)=>{

    return  instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}*/}

