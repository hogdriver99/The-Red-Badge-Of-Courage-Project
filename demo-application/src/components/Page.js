import React from 'react';

const Page = ({pageSide}) => {
  return (
      <div className={contentName(pageSide)} style={pageStyle}>
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

const pageStyle = {
  maxWidth: '520px',
  maxHeight: '500px',
  overflow: 'auto',
  whiteSpace: 'pre-wrap'
}

export default Page;
