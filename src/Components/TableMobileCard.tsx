import React from "react";
type IProps = {
  data: [];
  columns: [];
};

function getFieldValue(data: any, fieldName: string) {
  let value = "";
  if (data) {
    Object.keys(data).forEach((item: string) => {
      if (fieldName === item) {
        value = data[item];
      }
    });
  }

  return value;
}
function getData(data: any, dataIndex: string[]) {
  let result: any = data;
  dataIndex.forEach((field) => {
    result = getFieldValue(result, field);
  });

  return result;
}
function checkData(data: any, column: any) {
  if (
    typeof column["dataIndex"] !== "string" &&
    column["dataIndex"].length > 0
  ) {
    return getData(data, column["dataIndex"]);
  } else {
    return data[column["dataIndex"]];
  }
}

const TableMobileCard = ({ data, columns }: IProps) => {
  function cardStylingGenerator(data: [], columns: []): any {
    return columns.map((column: any, index: any): any => {
      if (column["dataIndex"]) {
        return (
          <div key={"key" + index} className="table--card__info">
            <span className="table--card__info-title">{column["title"]} </span>
            <span className="table--card__info-value">
              {checkData(data, column)}
            </span>
          </div>
        );
      } else if (column.render) {
        if (column["title"].length > 0) {
          <div key={"key" + index} className="table--card__info">
            <span className="table--card__info-title">{column["title"]} </span>
            <span className="table--card__info-value">
              {column.render(column["title"], data, index)}
            </span>
          </div>;
        } else {
          return (
            <div key={index + 1}>
              {column.render(column["title"], data, index)}
            </div>
          );
        }
      }
      return null;
    });
  }

  return (
    <div className="table--card__wrapper">
      {cardStylingGenerator(data, columns)}
    </div>
  );
};
export default TableMobileCard;
