import React from 'react';

const Content = (props) => {
  return (
    <div className="content float-left">
      {props.children}
    </div>
  )
}

export default Content;
