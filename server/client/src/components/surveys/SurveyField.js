import React from 'react';

export default (props) => {
  return (
    <div>
      <label>{props.label}</label>

      <input {...props.input} />

      <div id="input-error">
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};
