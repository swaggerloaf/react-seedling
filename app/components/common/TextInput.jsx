import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const TextInput = props => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <div>
        <input
          type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};
