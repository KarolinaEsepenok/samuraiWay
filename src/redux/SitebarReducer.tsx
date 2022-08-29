import React from 'react';
export type ActionType={
    action:()=>void

}
let initialState={}
export const SidebarReducer = (state=initialState,action:ActionType) => {
    return state
    ;
};

