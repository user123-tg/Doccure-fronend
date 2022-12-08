import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../../pages/login-register.scss';
import { Link } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
  validateUserFirstName,
  validateUserLastName,
  validatePhoneNo,
  validateConfirmPassword,
  validateaddress,
  validateGender
} from '../../utils/validations';
import Input from '../../themes/input';
import Submit from '../../themes/submit';
import { useDispatch, useSelector } from 'react-redux';

const validate = (values) => {
  let errors = {};
  let { firstname, lastname, email, phone, password, confirm_password, address, gender } = values;
  const errorsFirstName = validateUserFirstName(firstname);
  const errorsLastName = validateUserLastName(lastname);

  const errorsaddress = validateaddress(address);
  const errorsgender = validateGender(gender);

  const errorsEmail = validateEmail(email);
  const errorsPassword = validatePassword(password);
  const errorsPhone = validatePhoneNo(phone);
  const errorConfirmPassword = validateConfirmPassword(password, confirm_password);
  if (errorsFirstName) errors.firstname = errorsFirstName;
  if (errorsLastName) errors.lastname = errorsLastName;

  if (errorsaddress) errors.address = errorsaddress;
  if (errorsgender) errors.gender = errorsgender;

  if (errorsEmail) errors.email = errorsEmail;
  if (errorsPassword) errors.password = errorsPassword;
  if (errorsPhone) errors.phone = errorsPhone;
  if (errorConfirmPassword) errors.confirm_password = errorConfirmPassword;
  return errors;
};

const Form = ({ register, header, role, link, ishide, message }) => {
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      rolename: role,
      gender: '',
      address: ''
    },
    validate,
    onSubmit: async (values) => {
      dispatch(register(values, setLoading, setError, navigate));
    }
  });

  useEffect(() => {
    document.body.classList.add('account-page');
    return () => {
      document.body.classList.remove('account-page');
    };
  }, []);
  const handleOnChange = (e) => {
    if (e.target.name == 'phone') {
      var regx = /^[0-9]*$/;

      if (regx.test(e.target.value)) {
        return;
      } else {
        e.defaultPrevented = true;
      }
    }
  };

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 col-lg-6 login-left">
                  <img
                    src={require('../../assets/images/login-banner.png')}
                    className="img-fluid"
                    alt="Doccure Register"
                  />
                </div>

                {ishide ? (
                  <div className="col-md-12 col-lg-6 login-right pt-5 pb-5">
                    <h1>{message}</h1>
                  </div>
                ) : (
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        {header}
                        <Link to={role !== 'doctor' ? '/doctor/doctor-register' : '/register'}>
                          {link}
                        </Link>
                      </h3>
                    </div>

                    {loading && <div className="spinner-border text-primary" />}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                      <div className="form-group form-focus">
                        <Input
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          id="firstname"
                        />
                        <label className="focus-label" htmlFor="firstname">
                          First Name
                        </label>
                        {formik.errors.firstname ? (
                          <div style={{ color: 'red' }}>{formik.errors.firstname}</div>
                        ) : null}
                      </div>
                      <div className="form-group form-focus">
                        <Input
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          id="lastname"
                        />
                        <label className="focus-label" htmlFor="lastname">
                          Last Name
                        </label>
                        {formik.errors.lastname ? (
                          <div style={{ color: 'red' }}>{formik.errors.lastname}</div>
                        ) : null}
                      </div>
                      <div className="form-group form-focus">
                        <Input
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          id="email"
                        />
                        <label className="focus-label" htmlFor="email">
                          Email
                        </label>
                        {formik.errors.email ? (
                          <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="form-group form-focus">
                        <div className="d-flex no-gutters">
                          <div className="col-md-2">
                            <div className="countrycode">+91</div>
                          </div>
                          <div className="col-md-10">
                            <Input
                              type="tel"
                              name="phone"
                              maxlength="10"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                            />
                            <label className="focus-label" htmlFor="mobile">
                              Mobile Number
                            </label>
                          </div>
                        </div>

                        {formik.errors.phone ? (
                          <div style={{ color: 'red' }}>{formik.errors.phone}</div>
                        ) : null}
                      </div>
                      <div className="form-group form-focus">
                        <Input
                          name="address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          id="address"
                        />
                        <label className="focus-label" htmlFor="address">
                          Address
                        </label>
                        {formik.errors.phone ? (
                          <div style={{ color: 'red' }}>{formik.errors.address}</div>
                        ) : null}
                      </div>
                      <div className="form-group from-focus">
                        <label className="gender_input">Gender:</label>
                        <input
                          type="radio"
                          value="male"
                          onChange={formik.handleChange}
                          id="gender"
                          name="gender"
                        />{' '}
                        Male
                        <input
                          type="radio"
                          id="gender"
                          name="gender"
                          value="female"
                          onChange={formik.handleChange}
                          style={{ marginLeft: '10px' }}
                        />{' '}
                        Female
                        <input
                          type="radio"
                          id="gender"
                          name="gender"
                          value="other"
                          onChange={formik.handleChange}
                          style={{ marginLeft: '10px' }}
                        />{' '}
                        Other
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          id="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />

                        <label className="focus-label" htmlFor="password">
                          Create Password
                        </label>
                        {formik.errors.password ? (
                          <div style={{ color: 'red' }}>{formik.errors.password}</div>
                        ) : null}
                      </div>
                      <div className="text-right">
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      {!isLoading ? (
                        <Submit
                          name="Signup"
                          id="Signup"
                          className={
                            formik.isValid
                              ? 'btn btn-primary btn-block btn-lg login-btn'
                              : 'btn  disable btn-block btn-lg login-btn'
                          }
                        />
                      ) : (
                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="button"
                          disabled>
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"></span>
                          Loading...
                        </button>
                      )}

                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <span className="btn btn-facebook btn-block">
                            <i className="fab fa-facebook mr-1"></i>Login
                          </span>
                        </div>
                        <div className="col-6">
                          <span className="btn btn-google btn-block">
                            <i className="fab fa-google mr-1"></i>Login
                          </span>
                        </div>
                        <div className="col-3"></div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Form.propTypes = {
  props: PropTypes.any
};
export default Form;
