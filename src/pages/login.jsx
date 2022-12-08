import React, { useState, useEffect } from 'react';
// import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import { useFormik } from 'formik';
import { Link, useLocation } from 'react-router-dom';
import Submit from '../themes/submit';
import Input from '../themes/input';
import './login-register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validations';
import { login } from '../store/actions/user';
const validate = (values) => {
  let errors = {};
  let { email, password } = values;
  const errorsEmail = validateEmail(email);
  const errorsPassword = validatePassword(password);
  if (errorsEmail) errors.email = errorsEmail;
  if (errorsPassword) errors.password = errorsPassword;
  return errors;
};
const Login = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const location = useLocation();
  const url = new URL(window.location);
  const access_token = new URLSearchParams(url.search).get('token');
  console.log(location, 'joe');
  console.log(access_token, 'sree');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: async (values) => {
      dispatch(login(values, setLoading, setError, navigate));
    }
  });
  useEffect(() => {
    document.body.classList.add('account-page');
    return () => {
      document.body.classList.remove('account-page');
    };
  }, []);

  // const update = async (values) => {
  //   try {
  //     dispatch(login(values, setLoading, setError, navigate));
  //   } catch (err) {
  //     console.log('error');
  //     throw err;
  //   }
  // };
  // const getById = async () => {
  //   try {
  //     dispatch(login(setLoading, setError, navigate));
  //   } catch (err) {
  //     console.log('error');
  //     throw err;
  //   }
  // };
  return (
    <Layout {...props}>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={require('../assets/images/login-banner.png')}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login Doccure</h3>
                    </div>
                    {loading && <div className="spinner-border text-primay" />}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group form-focus">
                        <Input
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          id="email"
                        />
                        <label className="focus-label">Email</label>
                        {formik.errors.email ? (
                          <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
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
                        <label className="focus-label">Password</label>
                        {formik.errors.password ? (
                          <div style={{ color: 'red' }}>{formik.errors.password}</div>
                        ) : null}
                      </div>
                      <div className="text-right">
                        <Link to="/forgot-password" className="forgot-link">
                          Forgot Password ?
                        </Link>
                      </div>
                      {!isLoading ? (
                        <Submit
                          name="Log in"
                          id="login"
                          onClick={formik.onSubmit}
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

                      <div className="text-center dont-have">
                        Don’t have an account?<Link to="/register">Register</Link>
                      </div>
                    </form>
                    {/* <div className="login-or">
                      <span className="or-line"></span>
                      <span className="span-or">or</span>
                    </div> */}
                    {/* <div className="row form-row social-login">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-6">
                        <button className="btn btn-google btn-block">
                          <i className="fab fa-google mr-1" />
                          Login
                        </button>
                      </div>
                      <div className="col-sm-3"></div>
                    </div> */}

                    {/* <div className="table-action">
                      <Link to="#0" onClick={update} className="btn btn-sm bg-primary-light">
                        <i className="fas fa-print"></i> update
                      </Link>
                      <Link to="#0" onClick={getById} className="btn btn-sm bg-info-light">
                        <i className="far fa-eye"></i> get by id
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Login.propTypes = {
  props: PropTypes.any
};

export default Login;
