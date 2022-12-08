import Header from './header/header';
import Footer from './footer/footer';
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
Layout.propTypes = {
  props: PropTypes.element
};
export default Layout;
