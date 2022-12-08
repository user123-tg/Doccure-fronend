import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import Form from '../components/RagisterationForm/Form';
import './login-register.scss';
import { register } from '../store/actions/user';
const DoctorRegisteration = (props) => {
  return (
    <Layout {...props}>
      <Form register={register} role={'doctor'} header={'Doctor Register'} link={'Not a doctor?'} />
    </Layout>
  );
};
DoctorRegisteration.propTypes = {
  props: PropTypes.any
};
export default DoctorRegisteration;
