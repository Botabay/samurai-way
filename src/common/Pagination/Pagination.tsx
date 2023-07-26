import s from './Pagination.module.css'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number

    toSetCurrentPage: any
    getPageUsers: any
}

export const Pagination = ({
    totalUsersCount,
    pageSize,
    currentPage,

    toSetCurrentPage,
    getPageUsers
}: PropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const arr = []
    for (let i = 1; i < pagesCount; i++) arr.push(i);
    const onClickHandler = (el: number) => {
        toSetCurrentPage(el)
        getPageUsers(el);
    }
    return (<div>
        <div>
            {arr.map((el: number) => <span
                onClick={() => onClickHandler(el)}
                className={el === currentPage ? s.selected : ''}
            >
                {el}
            </span>)}
        </div>
    </div>)
}