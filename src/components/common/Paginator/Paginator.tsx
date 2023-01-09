import React, {useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged,
                                                            portionSize
                                                        }) => {
    console.log('pages', totalItemsCount, pageSize)
    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    console.log('paginationParams', pagesCount, portionNumber, portionCount, leftPortionNumber, rightPortionNumber)
    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} className={s.button}> PREV </button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span key={p} className={`${s.default} ${p === currentPage ? s.currentPage : ''}`}
                                 onClick={(e) => onPageChanged(p)}>{p}</span>
                })}

            {portionNumber < portionCount && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} className={s.button}> NEXT </button>}
        </div>
    );
};