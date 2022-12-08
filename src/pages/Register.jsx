import React from 'react';
// import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';
import Layout from '../layouts/layout';
import Form from '../components/RagisterationForm/Form';
import { register } from '../store/actions/user';
const Register = (props) => {
  // const submitHandlers = (e) => {
  //   e.preventDefault();
  //   console.log('submit handler called');
  // };
  //   const responseGoogle = async (gdata) => {
  //     registerGoogle(gdata.googleId, gdata.tokenId, 'patient', setLoading, setError);
  //   };
  console.log('patient', 'rolename');
  return (
    <Layout {...props}>
      <Form
        register={register}
        role={'patient'}
        header={'Patient Register'}
        link={'are you a doctor?'}
      />
    </Layout>
  );
};
Register.propTypes = {
  props: PropTypes.any
};
export default Register;
