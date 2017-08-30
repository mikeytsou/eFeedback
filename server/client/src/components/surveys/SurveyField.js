import React from 'react';

export default (props) => {
  console.log(props.meta)
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} />
      {props.meta.touched && props.meta.error}
    </div>
  );
};
