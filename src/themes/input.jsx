import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = (props) => {
  const {
    type,
    name,
    id,
    value,
    onChange,
    className,
    placeholder,
    readOnly,
    defaultChecked,
    maxlength
  } = props;
  return (
    <input
      type={type}
      className={className}
      id={id}
      name={name}
      maxLength={maxlength}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      defaultChecked={defaultChecked}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};
Input.defaultProps = {
  className: 'form-control floating'
};

export default Input;
