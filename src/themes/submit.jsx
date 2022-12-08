import React from 'react';
import PropTypes from 'prop-types';
import './submit.scss';

const Submit = ({ name, id, value, onClick, className }) => {
  return (
    <button className={className} type="submit" name={name} value={value} onClick={onClick} id={id}>
      {name}
    </button>
  );
};

Submit.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]),
  onClick: PropTypes.func
};
Submit.defaultProps = {
  className: 'btn btn-primary btn-block btn-lg login-btn'
};
export default Submit;
