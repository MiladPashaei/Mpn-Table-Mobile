import React, { useState } from "react";
import TableMobileCard from "./Components/TableMobileCard";
import TableMobilePagination from "./Components/TableMobilePagination";
import "./App.scss";
type IProps = {
  loading?: boolean;
  dataSource: [];
  columns: any;
  paginationAmount: number;
};
const TableMobile = ({
  loading = false,
  dataSource,
  columns,
  paginationAmount,
}: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ref: any = React.useRef();
  function currentPageChangeHandler(number: number) {
    setCurrentPage(number);
    if (ref.current) {
      ref.current.scrollIntoView(true);
    }
  }
  if (loading) {
    return <div> Loading ...</div>;
  }

  if (dataSource.length === 0) {
    return <div className="emptyDataTable">No Data</div>;
  }
  const indexOfLastPost: number = currentPage * paginationAmount;
  const indexOfFirstPost: number = indexOfLastPost - paginationAmount;
  const currentDatas: any = dataSource?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <div>
        {currentDatas.map((data: any, dataIndex: any) => {
          return (
            <TableMobileCard key={dataIndex} data={data} columns={columns} />
          );
        })}
      </div>
      <div>
        <TableMobilePagination
          currentPage={currentPage}
          dataLength={dataSource.length}
          setCurrentPage={currentPageChangeHandler}
          paginationAmount={paginationAmount}
        />
      </div>
    </div>
  );
};

export default TableMobile;
