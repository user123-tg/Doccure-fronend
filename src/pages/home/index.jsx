import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layouts/layout';
import HomeSearch from '../../components/home/homesearch';
import HomeLooking from '../../components/home/homeLooking/home-looking';
import HomeClinic from '../../components/home/Clinic/clinic';
import BookDoctor from '../../components/home/BookDoctor/bookDoctor';
import HomeFeatures from '../../components/home/features/features';
import HomeBlog from '../../components/home/Blog/Blog';

const Home = (props) => {
  return (
    <Layout>
      <HomeSearch {...props} />
      <HomeLooking {...props} />
      <HomeClinic {...props} />
      <BookDoctor {...props} />
      <HomeFeatures {...props} />
      <HomeBlog {...props} />
    </Layout>
  );
};
export default Home;

Home.propTypes = {
  props: PropTypes.any
};
