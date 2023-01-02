import {UsersType} from "../redux/UsersReducer";

export const updateObjectInArray=(items:UsersType[], itemId:number,objPropName:any,newObjProps:any)=>{
   return  items.map(u => {
        if (u["id"] === itemId) {
            return {...u,...newObjProps}
        }
        return u
    })
}
