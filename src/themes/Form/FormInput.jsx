import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input';
import './formInput.scss';
const FormInput = ({ label }) => {
  return (
    <div className="form-input">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="form-group">
            <label>{label}</label>
            <Input type="text" className="form-control" placeholder="" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default FormInput;
