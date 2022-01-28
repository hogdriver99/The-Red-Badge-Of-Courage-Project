import React from 'react';

const Page = ({pageSide}) => {
  return (
    <div className={contentName(pageSide)}>
        <p className={pageName(pageSide)}></p>
    </div>
  )
};

function contentName(pageSide) {
    return "content-".concat(pageSide)
}

function pageName(pageSide) {
    return "page-".concat(pageSide)
}

export default Page;
