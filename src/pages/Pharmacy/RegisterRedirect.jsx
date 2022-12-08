import React from 'react';
import Layout from '../../layouts/layout';
import Form from '../../components/RagisterationForm/Form';

const RegisterRedirect = (props) => {
  return (
    <Layout {...props}>
      <Form ishide={true} message={'Please check your mail'} />
    </Layout>
  );
};

export default RegisterRedirect;
