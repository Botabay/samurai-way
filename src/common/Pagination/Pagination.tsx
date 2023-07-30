import { useState } from "react";
import s from "./Pagination.module.css";

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  partSize: number;

  toSetCurrentPage: any;
  getPageUsers: any;
};

export const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  partSize = 4,

  toSetCurrentPage,
  getPageUsers,
}: PropsType) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const [partNumber, setPartNumber] = useState(1);
  let leftSidePageNumber = (partNumber - 1) * partSize + 1;
  let rightSidePageNumber = partNumber * partSize;

  const arr = [];
  for (let i = 1; i < pagesCount; i++) arr.push(i);

  const partCount = Math.ceil(pagesCount / partSize);
  const onClickHandler = (el: number) => {
    toSetCurrentPage(el);
    getPageUsers(el);
  };
  return (
    <div>
      {partNumber > 1 && (
        <button
          onClick={() => {
            setPartNumber(partNumber === 1 ? 1 : partNumber - 1);
          }}
        >
          {" "}
          left
        </button>
      )}
      <div>
        {arr
          .filter((el) => el <= rightSidePageNumber && el >= leftSidePageNumber)
          .map((el: number, ind: number) => (
            <span
              key={ind}
              onClick={() => onClickHandler(el)}
              className={el === currentPage ? s.selected : ""}
            >
              {` ${el} `}
            </span>
          ))}
      </div>
      {partNumber < partCount && (
        <button
          onClick={() => {
            setPartNumber(
              partNumber === partCount ? partCount : partNumber + 1
            );
          }}
        >
          right{" "}
        </button>
      )}
    </div>
  );
};
