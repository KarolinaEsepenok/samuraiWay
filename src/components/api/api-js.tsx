import axios from "axios";




const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'abd96315-58cc-42a7-a904-226e13c834ce'
    }


});
export const usersAPI = {
    getUsers(currentPage:number,pageSize:number){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}
export const getUsers2=(currentPage:number,pageSize:number)=>{

    return  instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

