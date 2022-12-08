import React, { useState } from 'react';
import DoctorSidebar from '../../components/doctor/doctorSlider.jsx';
import DashboardSidebar from '../patients/dashboard/sidebar.jsx';
import { useFormik } from 'formik';
import Layout from '../../layouts/layout.jsx';
import StickyBox from 'react-sticky-box';
import { changePassword } from '../../utils/services/patient.js';
import { validatePassword } from '../../utils/validations';
import Input from '../../themes/input.jsx';
import Submit from '../../themes/submit.jsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { verifyToken } from '../../store/actions/user';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './password.scss';
import { useEffect } from 'react';
const validate = (values) => {
  const errors = {};
  const { oldPassword, newPassword, confirmPassword } = values;
  const oldPasswordError = validatePassword(oldPassword);
  const newPasswordError = validatePassword(newPassword);
  const confirmPasswordError = validatePassword(confirmPassword);
  if (oldPasswordError) errors.oldPassword = oldPasswordError;
  if (newPasswordError) errors.newPassword = newPasswordError;
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

  return errors;
};

const PasswordReset = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  console.log(location, 'dd');
  const params = useParams();
  const [param, setParam] = useState(params?.token);
  useEffect(() => {
    if (location.pathname.split('/').length > 1 && param) {
      dispatch(verifyToken(param, navigate));
      setParam;
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirm_password: ''
    },
    validate,
    onSubmit: async (values) => {
      console.log(values, 'bharathi');
      // const { token } = values;
      // console.log(token,'bharathi');

      try {
        changePassword(
          { confirm_password: values.confirmPassword, password: values.oldPassword },
          setLoading,
          setError
        );
      } catch (err) {
        console.log('error');
        throw err;
      }
    }
  });
  const { oldPassword, newPassword, confirmPassword } = formik.values;
  const { handleSubmit, handleChange, errors } = formik;

  return (
    <div className="password">
      <Layout {...props}>
        <div>
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/home">Home</a>
                      </li>
                      {location.pathname.includes('patient') ||
                      location.pathname.includes('doctor') ? (
                        <li className="breadcrumb-item active" aria-current="page">
                          Profile Settings
                        </li>
                      ) : null}
                    </ol>
                  </nav>
                  {location.pathname.includes('patient') || location.pathname.includes('doctor') ? (
                    <h2 className="breadcrumb-title">Profile Settings</h2>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    {location.pathname.includes('patient') ? (
                      <DashboardSidebar />
                    ) : location.pathname.includes('doctor') ? (
                      <DoctorSidebar />
                    ) : null}
                  </StickyBox>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="card">
                    <div className="card-body">
                      {loading && <div className="spinner-border text-primary" />}
                      {error && <div className="alert alert-danger">{error}</div>}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="mb-2">Old Password</label>
                          <Input
                            type="password"
                            id="pwd1"
                            className="form-control"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={handleChange}
                            placeholder=""
                          />
                          {/* <input type="password" className="form-control" name="oldPassword" value={oldPassword} onChange={handleChange} /> */}

                          {errors.oldPassword ? (
                            <div style={{ color: 'red' }}>{errors.oldPassword}</div>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <label className="mb-2">New Password</label>
                          <Input
                            type="password"
                            id="pwd2"
                            className="form-control"
                            name="newPassword"
                            value={newPassword}
                            onChange={handleChange}
                            placeholder=""
                          />

                          {errors.newPassword ? (
                            <div style={{ color: 'red' }}>{errors.newPassword}</div>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <label className="mb-2">Confirm Password</label>
                          <Input
                            type="password"
                            id="pwd3"
                            className="form-control"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder=""
                          />

                          {errors.confirmPassword ? (
                            <div style={{ color: 'red' }}>{errors.confirmPassword}</div>
                          ) : null}
                        </div>
                        <div className="submit-section">
                          <Submit
                            type="submit"
                            className="btn btn-primary submit-btn"
                            name="Save Changes"
                            id="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default PasswordReset;

PasswordReset.prototype = {
  props: PropTypes.any
};
