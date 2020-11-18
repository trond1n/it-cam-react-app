import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            onClick={(e) => {
              onPageChanged(p);
            }}
            className={currentPage === p && styles.selected__page}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
