import React from "react";
import "./pagination.scss";
import { arrowLeftIc, arrowRightIc } from "constants/icon";

const Pagination = ({ currPage, totalPage, onPageChange }) => {
  const onNext = () => {
    if (currPage < totalPage) onPageChange(currPage + 1);
  };

  const onPrev = () => {
    if (currPage > 1) onPageChange(currPage - 1);
  };

  return (
    <div className="page">
      <p className="page__title">{`Page ${currPage} of ${totalPage}`}</p>
      <div className="page__control">
        <button
          className={
            currPage === 1 ? "pageBtn pageBtn--disabled" : "pageBtn"
          }
          type="button"
          onClick={onPrev}
        >
          <img
            className="img img--24"
            src={arrowLeftIc}
            alt="leftArr"
          />
        </button>
        <button
          className={
            currPage === totalPage
              ? "pageBtn pageBtn--disabled"
              : "pageBtn"
          }
          type="button"
          onClick={onNext}
        >
          <img
            className="img img--24"
            src={arrowRightIc}
            alt="rightArr"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
