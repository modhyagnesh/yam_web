import React from 'react';
import classNames from 'classnames';

const Pagination = ({ page, totalcount, changePage }) => {
  return (
    <div className="bottom-pagination">
      <ul className="pagination justify-content-center">
        <li className={classNames('page-item', { disabled: page === 0 })}>
          <a className="page-link" tabIndex="-1" onClick={() => changePage(page - 1)}>
            Previous
          </a>
        </li>
        <For each="item" of={[...Array(Math.min(Math.ceil(totalcount / 9), 3)).keys()]}>
          <li className={classNames('page-item', { active: page === item * page })}>
            <a className="page-link" onClick={() => changePage(item + page + 1)}>
              {`${item + page + 1}`}
            </a>
          </li>
        </For>
        <li
          className={classNames('page-item', {
            disabled: Math.floor(totalcount / 9) === page,
          })}
        >
          <a className="page-link" onClick={() => changePage(page + 1)}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
