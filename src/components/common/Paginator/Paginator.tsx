import React, {useEffect, useState} from 'react';
import {UsersPropsType} from "../../Users/UserContainer";
import s from "../Paginator/Paginator.module.css";


export const Paginator = (currentPage:any, totalItemsCount:number,pageSize:number, onPageChanged:any,portionSize=10) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber]= useState(1);
    let leftPortionPageNumber = (portionNumber - 1)* portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
            <div>
                <div className={s.paginator}>
                {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Prev</button>}
                {pages
                    .filter(p=>p>= leftPortionPageNumber &&  p<= rightPortionPageNumber)
                    .map(p => {
                    return <span  key={p} className={currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                    onPageChanged(p)
                                 }}>{p}</span>
                })}</div>
                {portionCount>portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
            </div>
    );
};

