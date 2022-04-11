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
  maxHeight: '800px',
  overflow: 'auto',
  whiteSpace: 'pre-wrap',
  fontSize: '17px',
}

export default Page;
