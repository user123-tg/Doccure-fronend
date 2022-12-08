import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Forgot_Password } from '../store/actions/user';
import { validateEmail } from '../utils/validations';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../layouts/layout';
import PropTypes from 'prop-types';
import Input from '../themes/input';
import Submit from '../themes/submit';
const validate = (values) => {
  const errors = {};
  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  return errors;
};

const ForgotPassword = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: async (values) => {
      try {
        dispatch(Forgot_Password(values, setLoading, setError));
      } catch (err) {
        console.log('error');
        throw err;
      }
    }
  });
  useEffect(() => {
    document.body.classList.add('account-page');
    return () => {
      document.body.classList.remove('account-page');
    };
  }, []);

  return (
    <Layout>
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
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Forgot Password?</h3>
                      <p className="small text-muted">
                        Enter your email to get a password reset link
                      </p>
                    </div>
                    {loading && <div className="spinner-border text-primary" />}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form
                      // action="/admin/login"
                      onSubmit={formik.handleSubmit}>
                      <div className="form-group form-focus">
                        <label className="focus-label">Email</label>
                        <Input
                          type="email"
                          className="form-control floating"
                          name="email"
                          id="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          {...props}
                        />
                        {formik.errors.email ? (
                          <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="text-right">
                        <Link to="/login" className="forgot-link">
                          Remember your password?{' '}
                        </Link>
                      </div>
                      {!isLoading ? (
                        <Submit name="Reset Password" id="reset_password" />
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
                    </form>
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
ForgotPassword.prototype = {
  props: PropTypes.any
};
export default ForgotPassword;
