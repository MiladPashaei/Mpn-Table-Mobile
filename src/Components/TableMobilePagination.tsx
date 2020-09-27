import React from "react";
type IProps = {
  dataLength: number;
  paginationAmount?: number;
  setCurrentPage: any;
  currentPage: number;
};
const TableMobilePagination = ({
  dataLength,
  paginationAmount = 10,
  setCurrentPage,
  currentPage,
}: IProps) => {
  const pageNumbers = [];
  for (let i: number = 1; i <= Math.ceil(dataLength / paginationAmount); i++) {
    pageNumbers.push(i);
  }
  function changeCurrentPage(number: number) {
    setCurrentPage(number);
  }
  return (
    <div className="table--card__Pagination--wrapper">
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={
            currentPage === number
              ? "button  table--card__Pagination--item button-active"
              : " button  table--card__Pagination--item"
          }
          onClick={() => changeCurrentPage(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default TableMobilePagination;
